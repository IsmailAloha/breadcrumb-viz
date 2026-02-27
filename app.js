// ── Type Configuration ───────────────────────────────────────────────────────
const TYPE_CONFIG = {
  'ui.lifecycle':   { label: 'UI Lifecycle',  chipClass: 'chip-lifecycle', dot: '#8b5cf6', badge: '#8b5cf620', badgeBorder: '#8b5cf640' },
  'network.request':{ label: 'Network',       chipClass: 'chip-network',   dot: '#10b981', badge: '#10b98120', badgeBorder: '#10b98140' },
  'user.event':     { label: 'User Event',    chipClass: 'chip-user',      dot: '#f59e0b', badge: '#f59e0b20', badgeBorder: '#f59e0b40' },
  'app.lifecycle':  { label: 'App Lifecycle', chipClass: 'chip-app',       dot: '#06b6d4', badge: '#06b6d420', badgeBorder: '#06b6d440' },
  'app.launch':     { label: 'App Launch',    chipClass: 'chip-app',       dot: '#06b6d4', badge: '#06b6d420', badgeBorder: '#06b6d440' },
  'app.install':    { label: 'App Install',   chipClass: 'chip-app',       dot: '#06b6d4', badge: '#06b6d420', badgeBorder: '#06b6d440' },
  'network.state':  { label: 'Network State', chipClass: 'chip-state',     dot: '#ec4899', badge: '#ec489920', badgeBorder: '#ec489940' },
};

function getConfig(type) {
  return TYPE_CONFIG[type] || {
    label: type,
    chipClass: 'chip-nav',
    dot: '#4f8ef7',
    badge: '#4f8ef720',
    badgeBorder: '#4f8ef740',
  };
}

// ── App State ────────────────────────────────────────────────────────────────
let allBreadcrumbs = [];
let activeFilters  = new Set();
let sortOrder      = 'asc';
let crashEvent     = null;

// ── Formatting Helpers ───────────────────────────────────────────────────────
function formatTime(ts) {
  const d = new Date(ts);
  const hms = d.toLocaleTimeString('en-US', {
    hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  return hms + '.' + String(d.getMilliseconds()).padStart(3, '0');
}

function formatDelta(ms) {
  if (ms < 1000) return `+${ms}ms`;
  return `+${(ms / 1000).toFixed(1)}s`;
}

function formatDuration(ms) {
  if (ms < 1000) return ms + 'ms';
  if (ms < 60000) return (ms / 1000).toFixed(1) + 's';
  const m = Math.floor(ms / 60000);
  const s = ((ms % 60000) / 1000).toFixed(0);
  return `${m}m ${s}s`;
}

function getStatusClass(code) {
  if (!code) return '';
  const n = parseInt(code, 10);
  if (n >= 500) return 'status-err';
  if (n >= 400) return 'status-warn';
  return 'status-ok';
}

// ── Event Text Builders ──────────────────────────────────────────────────────
function buildMainText(bc) {
  switch (bc.type) {
    case 'ui.lifecycle':
      return `${bc.className} → ${bc.event}`;
    case 'network.request':
      return bc.url ? bc.url.replace(/^https?:\/\//, '') : 'Unknown URL';
    case 'user.event':
      return `${bc.action} on ${bc.targetClass || ''}${bc.targetId ? ' · ' + bc.targetId.split(':').pop() : ''}`;
    case 'app.lifecycle':
      return `App → ${bc.event}`;
    case 'app.launch':
      return `Launch · ${bc.launchType || ''}`;
    case 'app.install':
      return `Installed · v${bc.version || ''}`;
    case 'network.state':
      return `Network → ${bc.state}`;
    default:
      return JSON.stringify(bc).slice(0, 80);
  }
}

function buildDetail(bc) {
  const parts = [];

  if (bc.type === 'network.request') {
    if (bc.statusCode) {
      const cls = getStatusClass(bc.statusCode);
      parts.push(`<span><strong>status</strong> <span class="${cls}">${bc.statusCode}</span></span>`);
    }
    if (bc.url) {
      parts.push(`<span><strong>url</strong> ${bc.url}</span>`);
    }
  }

  if (bc.type === 'user.event') {
    if (bc.targetId)    parts.push(`<span><strong>id</strong> ${bc.targetId}</span>`);
    if (bc.targetClass) parts.push(`<span><strong>class</strong> ${bc.targetClass}</span>`);
  }

  if (bc.type === 'ui.lifecycle') {
    parts.push(`<span><strong>class</strong> ${bc.className}</span>`);
    parts.push(`<span><strong>event</strong> ${bc.event}</span>`);
  }

  return parts.join('');
}

// ── JSON Parsing ─────────────────────────────────────────────────────────────
function parsePayload(raw) {
  let parsed = JSON.parse(raw.trim());

  // unwrap outer array if needed
  if (Array.isArray(parsed)) parsed = parsed[0];

  let bcs   = [];
  let crash = null;

  // format: full crash report with NATIVEAPP.breadcrumbs string
  if (parsed.NATIVEAPP && parsed.NATIVEAPP.breadcrumbs) {
    bcs = JSON.parse(parsed.NATIVEAPP.breadcrumbs);
  } else if (Array.isArray(parsed)) {
    // format: raw breadcrumb array
    bcs = parsed;
  }

  // extract crash metadata
  if (parsed.msg) {
    crash = {
      message: parsed.msg.split('~~')[0],
      type:    parsed.eTp || 'Crash',
      time:    parseInt(parsed.time, 10) || null,
    };
  }

  return { breadcrumbs: bcs, crash };
}

// ── Error Display ─────────────────────────────────────────────────────────────
function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.classList.add('visible');
}

// ── Stats Rendering ───────────────────────────────────────────────────────────
function renderStats() {
  const bcs = allBreadcrumbs;

  document.getElementById('statTotal').textContent = bcs.length;

  const timestamps = bcs.map(b => b.timestamp).filter(Boolean);
  if (timestamps.length >= 2) {
    const dur = Math.max(...timestamps) - Math.min(...timestamps);
    document.getElementById('statDuration').textContent = formatDuration(dur);
  }

  const screens = new Set(
    bcs.filter(b => b.type === 'ui.lifecycle' && b.className).map(b => b.className)
  );
  document.getElementById('statScreens').textContent = screens.size;

  document.getElementById('statNetwork').textContent =
    bcs.filter(b => b.type === 'network.request').length;

  document.getElementById('statUser').textContent =
    bcs.filter(b => b.type === 'user.event').length;
}

// ── Filter Chip Rendering ─────────────────────────────────────────────────────
function renderFilterChips() {
  const counts = {};
  allBreadcrumbs.forEach(b => { counts[b.type] = (counts[b.type] || 0) + 1; });

  const container = document.getElementById('filterChips');
  container.innerHTML = '';

  // preserve first-seen order
  const types = [...new Set(allBreadcrumbs.map(b => b.type))];

  types.forEach(type => {
    const cfg  = getConfig(type);
    const chip = document.createElement('div');
    chip.className    = `filter-chip ${cfg.chipClass}`;
    chip.dataset.type = type;
    chip.innerHTML = `
      <span class="dot"></span>
      ${cfg.label}
      <span class="count">${counts[type]}</span>
    `;
    chip.addEventListener('click', () => toggleFilter(type, chip));
    container.appendChild(chip);
  });
}

function toggleFilter(type, chip) {
  if (activeFilters.has(type)) {
    activeFilters.delete(type);
    chip.classList.add('inactive');
  } else {
    activeFilters.add(type);
    chip.classList.remove('inactive');
  }
  applyFilters();
}

// ── Sort ──────────────────────────────────────────────────────────────────────
function setSort(order) {
  sortOrder = order;
  document.getElementById('sortAsc').classList.toggle('active',  order === 'asc');
  document.getElementById('sortDesc').classList.toggle('active', order === 'desc');
  renderTimeline();
}

// ── Timeline Rendering ────────────────────────────────────────────────────────
function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';

  const sorted = [...allBreadcrumbs].sort((a, b) =>
    sortOrder === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp
  );

  sorted.forEach((bc, idx) => {
    const cfg   = getConfig(bc.type);
    const delta = idx > 0 ? Math.abs(bc.timestamp - sorted[idx - 1].timestamp) : 0;
    const detail = buildDetail(bc);

    const item = document.createElement('div');
    item.className        = 'bc-item';
    item.dataset.type     = bc.type;
    item.style.animationDelay = `${Math.min(idx * 12, 300)}ms`;

    item.innerHTML = `
      <div class="bc-dot-wrap">
        <div class="bc-dot" style="background:${cfg.dot}"></div>
      </div>
      <div class="bc-content">
        <div class="bc-row">
          <span class="bc-badge"
            style="background:${cfg.badge};border:1px solid ${cfg.badgeBorder};color:${cfg.dot}">
            ${cfg.label}
          </span>
          <span class="bc-main" title="${buildMainText(bc)}">${buildMainText(bc)}</span>
          <div class="bc-meta">
            ${delta > 0 ? `<span class="bc-delta">${formatDelta(delta)}</span>` : ''}
            <span class="bc-time">${formatTime(bc.timestamp)}</span>
          </div>
        </div>
        ${detail ? `<div class="bc-detail">${detail}</div>` : ''}
      </div>
    `;

    container.appendChild(item);
  });

  // append crash card as the final item
  if (crashEvent) {
    const crashEl = document.createElement('div');
    crashEl.className = 'bc-item is-crash';
    crashEl.style.animationDelay = `${Math.min(sorted.length * 12, 300)}ms`;
    crashEl.innerHTML = `
      <div class="bc-dot-wrap">
        <div class="bc-dot" style="background:#ef4444"></div>
      </div>
      <div class="bc-content"
        style="border-color:rgba(239,68,68,0.3);background:rgba(239,68,68,0.07)">
        <div class="bc-row">
          <span class="bc-badge"
            style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);color:#ef4444">
            💥 CRASH
          </span>
          <span class="bc-main" style="color:#ef4444" title="${crashEvent.message}">
            ${crashEvent.message}
          </span>
          <div class="bc-meta">
            ${crashEvent.time
              ? `<span class="bc-time">${formatTime(crashEvent.time)}</span>`
              : ''}
          </div>
        </div>
        <div class="bc-detail" style="color:#ef4444aa">
          <span><strong style="color:#ef4444bb">type</strong> ${crashEvent.type}</span>
        </div>
      </div>
    `;
    container.appendChild(crashEl);
  }

  applyFilters();
}

// ── Filter Application ────────────────────────────────────────────────────────
function applyFilters() {
  const items = document.querySelectorAll('.bc-item');
  let visible = 0;

  items.forEach(item => {
    const type = item.dataset.type;
    // crash card has no type — always visible
    if (!type || activeFilters.has(type)) {
      item.classList.remove('filtered-out');
      visible++;
    } else {
      item.classList.add('filtered-out');
    }
  });

  const total = allBreadcrumbs.length;
  document.getElementById('resultCount').textContent = `${visible} / ${total} events`;

  document.getElementById('emptyState').classList.toggle('visible', visible === 0);
}

// ── Main Entry ────────────────────────────────────────────────────────────────
function parseAndRender() {
  const raw   = document.getElementById('jsonInput').value.trim();
  const errEl = document.getElementById('errorMsg');

  if (!raw) { showError('Please paste a JSON payload first.'); return; }

  try {
    const { breadcrumbs, crash } = parsePayload(raw);
    errEl.classList.remove('visible');

    if (!breadcrumbs.length) {
      showError('No breadcrumbs found in payload.');
      return;
    }

    allBreadcrumbs = breadcrumbs;
    crashEvent     = crash;
    activeFilters  = new Set(breadcrumbs.map(b => b.type));

    renderStats();
    renderFilterChips();
    renderTimeline();

    document.getElementById('controls').classList.add('visible');
    document.getElementById('statsRow').classList.add('visible');
    document.getElementById('timelineWrap').classList.add('visible');

  } catch (e) {
    showError('Invalid JSON: ' + e.message);
  }
}

function clearAll() {
  document.getElementById('jsonInput').value = '';
  document.getElementById('errorMsg').classList.remove('visible');
  document.getElementById('controls').classList.remove('visible');
  document.getElementById('statsRow').classList.remove('visible');
  document.getElementById('timelineWrap').classList.remove('visible');
  document.getElementById('timeline').innerHTML = '';
  allBreadcrumbs = [];
  crashEvent     = null;
}

// ── Keyboard Shortcut: Cmd/Ctrl + Enter ──────────────────────────────────────
document.getElementById('jsonInput').addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) parseAndRender();
});

// ─────────────────────────────────────────────────────────────────────────────
//  Breadcrumb Visualizer — app.js
//  Material Design 3 edition
// ─────────────────────────────────────────────────────────────────────────────

// ── Type Configuration ───────────────────────────────────────────────────────
const TYPE_CONFIG = {
  'ui.lifecycle': {
    label:    'UI Lifecycle',
    category: 'lifecycle',
    chipCls:  'chip-lifecycle',
    dotCls:   'dot-lifecycle',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/></svg>`,
  },
  'network.request': {
    label:    'Network',
    category: 'network',
    chipCls:  'chip-network',
    dotCls:   'dot-network',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z" stroke="currentColor" stroke-width="1.8"/><path d="M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10M2 12h20" stroke="currentColor" stroke-width="1.8"/></svg>`,
  },
  'user.event': {
    label:    'User Event',
    category: 'user',
    chipCls:  'chip-user',
    dotCls:   'dot-user',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M6.5 6.5 17.5 17.5M6.5 6.5V14M6.5 6.5H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  'app.lifecycle': {
    label:    'App Lifecycle',
    category: 'app',
    chipCls:  'chip-app',
    dotCls:   'dot-app',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" stroke-width="1.8"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  },
  'app.launch': {
    label:    'App Launch',
    category: 'app',
    chipCls:  'chip-app',
    dotCls:   'dot-app',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  },
  'app.install': {
    label:    'App Install',
    category: 'app',
    chipCls:  'chip-app',
    dotCls:   'dot-app',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2v12M8 10l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  },
  'app.update': {
    label:    'App Update',
    category: 'app',
    chipCls:  'chip-app',
    dotCls:   'dot-app',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2v12M8 10l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  },
  'network.state': {
    label:    'Network State',
    category: 'state',
    chipCls:  'chip-state',
    dotCls:   'dot-state',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  'system.event': {
    label:    'System Event',
    category: 'state',
    chipCls:  'chip-state',
    dotCls:   'dot-state',
    icon: `<svg class="chip-icon" viewBox="0 0 18 18" fill="none">
  <path d="M0.5 0.5L10.4 10.4M0.5 0.5H3.8M0.5 0.5V3.8M13.5 13.5L17.2 17.2" 
        stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 1.9l.6 1.2c.1.2.3.4.5.5l.5.3c.2.1.5.2.7.2l1.3-.1.9 1.5-.7 1.1c-.2.2-.2.5-.2.8v.6c0 .3.1.6.2.8l.7 1.1-.9 1.5-1.3-.1c-.2 0-.5.1-.7.2l-.5.3c-.2.1-.4.3-.5.5L9 16.1H7.8l-.6-1.2c-.1-.2-.3-.4-.5-.5l-.5-.3c-.2-.1-.5-.2-.7-.2l-1.3.1-.9-1.5.7-1.1c.1-.2.2-.5.2-.8v-.6c0-.3-.1-.6-.2-.8l-.7-1.1.9-1.5 1.3.1c.2 0 .5-.1.7-.2l.5-.3c.2-.1.4-.3.5-.5l.6-1.2H9z" 
        stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <rect x="7" y="7" width="4" height="4" rx="1" 
        stroke="currentColor" stroke-width="1.6"/>
</svg>`,
  },
};

function getCfg(type) {
  return TYPE_CONFIG[type] ?? {
    label:    type,
    category: 'nav',
    chipCls:  'chip-nav',
    dotCls:   'dot-nav',
    icon: `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>`,
  };
}

// ── State ────────────────────────────────────────────────────────────────────
let allBreadcrumbs = [];
let activeFilters  = new Set();
let sortOrder      = 'asc';
let crashEvent     = null;

// ── Formatting ───────────────────────────────────────────────────────────────
function fmtTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString('en-US', {
    hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit',
  }) + '.' + String(d.getMilliseconds()).padStart(3, '0');
}

function fmtDelta(ms) {
  if (ms < 1000) return `+${ms}ms`;
  return `+${(ms / 1000).toFixed(1)}s`;
}

function fmtDuration(ms) {
  if (ms < 1000) return ms + 'ms';
  if (ms < 60000) return (ms / 1000).toFixed(1) + 's';
  const m = Math.floor(ms / 60000);
  const s = ((ms % 60000) / 1000).toFixed(0);
  return `${m}m ${s}s`;
}

function statusClass(code) {
  if (!code) return '';
  const n = parseInt(code, 10);
  if (n >= 500) return 'status-5xx';
  if (n >= 400) return 'status-4xx';
  return 'status-2xx';
}

// ── Event Text ───────────────────────────────────────────────────────────────
function mainText(bc) {
  switch (bc.type) {
    case 'ui.lifecycle':    return `${bc.className}  ·  ${bc.event}`;
    case 'network.request': return bc.url ? bc.url.replace(/^https?:\/\//, '') : 'Unknown URL';
    case 'user.event':      return `${bc.action}  ·  ${bc.targetClass || ''}${bc.targetId ? '  #' + bc.targetId.split(':').pop() : ''}`;
    case 'app.lifecycle':   return `App  ·  ${bc.event}`;
    case 'app.launch':      return `${bc.launchType ? bc.launchType.charAt(0).toUpperCase() + bc.launchType.slice(1) : ''} launch`;
    case 'app.install':     return `Installed  ·  v${bc.version || ''}`;
    case 'app.update':     return `Updated  ·  v${bc.from || ''}  →  v${bc.to || ''}`;
    case 'network.state':   return `Signal  →  ${bc.state}`;
    case 'system.event':   return `${bc.eventType}  →  ${bc.event}`;
    default:                return JSON.stringify(bc).slice(0, 90);
  }
}

function detailItems(bc) {
  const items = [];
  if (bc.type === 'network.request') {
    if (bc.statusCode) items.push({ key: 'status', val: bc.statusCode, cls: statusClass(bc.statusCode) });
    if (bc.url)        items.push({ key: 'url', val: bc.url });
  }
  if (bc.type === 'user.event') {
    if (bc.targetId)    items.push({ key: 'id',    val: bc.targetId });
    if (bc.targetClass) items.push({ key: 'class', val: bc.targetClass });
  }
  if (bc.type === 'ui.lifecycle') {
    items.push({ key: 'class', val: bc.className });
    items.push({ key: 'event', val: bc.event });
  }
  if (bc.type === 'network.state') {
    items.push({ key: 'state', val: bc.state });
  }
  return items;
}

function renderDetailRow(bc) {
  const items = detailItems(bc);
  if (!items.length) return '';
  const html = items.map(it =>
    `<span class="bc-detail-item"><span class="bc-detail-key">${it.key}</span><span class="${it.cls || ''}">${it.val}</span></span>`
  ).join('');
  return `<div class="bc-detail-row">${html}</div>`;
}

// ── Parsing ───────────────────────────────────────────────────────────────────
function parsePayload(raw) {
  let parsed = JSON.parse(raw.trim());
  if (Array.isArray(parsed)) parsed = parsed[0];

  let bcs = [], crash = null;

  if (parsed?.NATIVEAPP?.breadcrumbs) {
    bcs = JSON.parse(parsed.NATIVEAPP.breadcrumbs);
  } else if (Array.isArray(parsed)) {
    bcs = parsed;
  }

  if (parsed?.msg) {
    crash = {
      message: parsed.msg.split('~~')[0],
      type:    parsed.eTp || 'Crash',
      time:    parseInt(parsed.time, 10) || null,
    };
  }

  return { breadcrumbs: bcs, crash };
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function renderStats() {
  const bcs = allBreadcrumbs;
  document.getElementById('statTotal').textContent = bcs.length;

  const ts = bcs.map(b => b.timestamp).filter(Boolean);
  if (ts.length >= 2) {
    document.getElementById('statDuration').textContent =
      fmtDuration(Math.max(...ts) - Math.min(...ts));
  }

  const screens = new Set(bcs.filter(b => b.type === 'ui.lifecycle' && b.className).map(b => b.className));
  document.getElementById('statScreens').textContent  = screens.size;
  document.getElementById('statNetwork').textContent  = bcs.filter(b => b.type === 'network.request').length;
  document.getElementById('statUser').textContent     = bcs.filter(b => b.type === 'user.event').length;
}

// ── Filter Chips ──────────────────────────────────────────────────────────────
function renderFilterChips() {
  const counts  = {};
  allBreadcrumbs.forEach(b => { counts[b.type] = (counts[b.type] || 0) + 1; });

  const types   = [...new Set(allBreadcrumbs.map(b => b.type))];
  const wrap    = document.getElementById('filterChips');
  wrap.innerHTML = '';

  types.forEach(type => {
    const cfg  = getCfg(type);
    const chip = document.createElement('div');
    chip.className = `filter-chip selected`;
    chip.dataset.type     = type;
    chip.dataset.category = cfg.category;

    chip.innerHTML = `
      <svg class="chip-check" width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="chip-dot" style="background:currentColor;opacity:0.6"></span>
      <span>${cfg.label}</span>
      <span class="chip-count">${counts[type]}</span>
    `;

    chip.addEventListener('click', () => toggleFilter(type, chip));
    wrap.appendChild(chip);
  });
}

function toggleFilter(type, chip) {
  if (activeFilters.has(type)) {
    activeFilters.delete(type);
    chip.classList.remove('selected');
  } else {
    activeFilters.add(type);
    chip.classList.add('selected');
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

// ── Timeline ──────────────────────────────────────────────────────────────────
function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';

  const sorted = [...allBreadcrumbs].sort((a, b) =>
    sortOrder === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp
  );

  sorted.forEach((bc, idx) => {
    const cfg   = getCfg(bc.type);
    const delta = idx > 0 ? Math.abs(bc.timestamp - sorted[idx - 1].timestamp) : 0;
    const detail = renderDetailRow(bc);

    const item = document.createElement('div');
    item.className        = 'bc-item';
    item.dataset.type     = bc.type;
    item.style.animationDelay = `${Math.min(idx * 10, 250)}ms`;

    item.innerHTML = `
      <div class="bc-node">
        <div class="bc-node-dot ${cfg.dotCls}"></div>
      </div>
      <div class="bc-card">
        <div class="bc-card-row">
          <span class="bc-type-chip ${cfg.chipCls}">
            ${cfg.icon}
            ${cfg.label}
          </span>
          <span class="bc-text" title="${mainText(bc)}">${mainText(bc)}</span>
          <div class="bc-meta-group">
            ${delta > 0 ? `<span class="bc-delta">${fmtDelta(delta)}</span>` : ''}
            <span class="bc-time">${fmtTime(bc.timestamp)}</span>
          </div>
        </div>
        ${detail}
      </div>
    `;

    container.appendChild(item);
  });

  // Crash item
  if (crashEvent) {
    const crashEl = document.createElement('div');
    crashEl.className = 'bc-item bc-crash';
    crashEl.style.animationDelay = `${Math.min(sorted.length * 10, 250)}ms`;

    const crashIcon = `<svg class="chip-icon" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;

    crashEl.innerHTML = `
      <div class="bc-node">
        <div class="bc-node-dot dot-crash"></div>
      </div>
      <div class="bc-card">
        <div class="bc-card-row">
          <span class="bc-type-chip chip-crash">
            ${crashIcon}
            Crash
          </span>
          <span class="bc-text" title="${crashEvent.message}">${crashEvent.message}</span>
          <div class="bc-meta-group">
            ${crashEvent.time ? `<span class="bc-time">${fmtTime(crashEvent.time)}</span>` : ''}
          </div>
        </div>
        <div class="bc-detail-row">
          <span class="bc-detail-item"><span class="bc-detail-key">type</span><span>${crashEvent.type}</span></span>
        </div>
      </div>
    `;
    container.appendChild(crashEl);
  }

  applyFilters();
}

// ── Filter Application ────────────────────────────────────────────────────────
function applyFilters() {
  const items   = document.querySelectorAll('.bc-item');
  let   visible = 0;

  items.forEach(item => {
    const type = item.dataset.type;
    const show = !type || activeFilters.has(type); // crash card (no type) always shows
    item.classList.toggle('filtered-out', !show);
    if (show) visible++;
  });

  document.getElementById('resultCount').textContent =
    `${visible} / ${allBreadcrumbs.length} events`;

  document.getElementById('emptyState')
    .classList.toggle('hidden', visible > 0);
}

// ── Main Entry ────────────────────────────────────────────────────────────────
function parseAndRender() {
  const raw   = document.getElementById('jsonInput').value.trim();
  const errEl = document.getElementById('errorMsg');

  if (!raw) { showErr('Please paste a JSON payload first.'); return; }

  try {
    const { breadcrumbs, crash } = parsePayload(raw);
    errEl.classList.remove('visible');

    if (!breadcrumbs.length) { showErr('No breadcrumbs found in payload.'); return; }

    allBreadcrumbs = breadcrumbs;
    crashEvent     = crash;
    activeFilters  = new Set(breadcrumbs.map(b => b.type));

    renderStats();
    renderFilterChips();
    renderTimeline();

    document.getElementById('statsRow').classList.remove('hidden');
    document.getElementById('controls').classList.remove('hidden');
    document.getElementById('timelineWrap').classList.remove('hidden');

  } catch (e) {
    showErr('Invalid JSON: ' + e.message);
  }
}

function showErr(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.classList.add('visible');
}

function clearAll() {
  document.getElementById('jsonInput').value = '';
  document.getElementById('errorMsg').classList.remove('visible');
  document.getElementById('statsRow').classList.add('hidden');
  document.getElementById('controls').classList.add('hidden');
  document.getElementById('timelineWrap').classList.add('hidden');
  document.getElementById('timeline').innerHTML = '';
  allBreadcrumbs = [];
  crashEvent     = null;
}

// Keyboard shortcut: Cmd/Ctrl + Enter
document.getElementById('jsonInput').addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) parseAndRender();
});

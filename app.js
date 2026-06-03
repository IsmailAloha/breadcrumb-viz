// ── Type Configuration ───────────────────────────────────────────────────────
const TYPE_CONFIG = {
  'ui.lifecycle':   { label: 'UI Lifecycle',  chipClass: 'chip-lifecycle', dot: '#8b5cf6', badge: '#8b5cf620', badgeBorder: '#8b5cf640' },
  'network.request':{ label: 'Network',       chipClass: 'chip-network',   dot: '#10b981', badge: '#10b98120', badgeBorder: '#10b98140' },
  'user.event':     { label: 'User Event',    chipClass: 'chip-user',      dot: '#f59e0b', badge: '#f59e0b20', badgeBorder: '#f59e0b40' },
  'app.lifecycle':  { label: 'App Lifecycle', chipClass: 'chip-app',       dot: '#06b6d4', badge: '#06b6d420', badgeBorder: '#06b6d440' },
  'app.launch':     { label: 'App Launch',    chipClass: 'chip-app',       dot: '#06b6d4', badge: '#06b6d420', badgeBorder: '#06b6d440' },
  'app.install':    { label: 'App Install',   chipClass: 'chip-app',       dot: '#06b6d4', badge: '#06b6d420', badgeBorder: '#06b6d440' },
  'network.state':  { label: 'Network State', chipClass: 'chip-state',     dot: '#ec4899', badge: '#ec489920', badgeBorder: '#ec489940' },
  'system.event':  { label: 'System Event', chipClass: 'chip-state',     dot: '#9f48ec', badge: '#9f48ec20', badgeBorder: '#9f48ec40' },
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
let allBreadcrumbs = [
  {
    "col" : 1,
    "time" : 1780487261552,
    "eCnt" : 1,
    "eTp" : "NativeAppCrash",
    "NATIVEAPP" : {
      "breadcrumbs" : "[{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780371278938,\"className\":\"AboutView\"},{\"className\":\"CellTitleView\",\"event\":\"onAppear\",\"timestamp\":1780371278938,\"type\":\"ui.lifecycle\"},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780371278938,\"className\":\"CellTitleView\"},{\"className\":\"CellView\",\"event\":\"onAppear\",\"timestamp\":1780371278963,\"type\":\"ui.lifecycle\"},{\"className\":\"CellView\",\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780371278963},{\"className\":\"CellView\",\"timestamp\":1780371278963,\"event\":\"onAppear\",\"type\":\"ui.lifecycle\"},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780371278963,\"className\":\"CellView\"},{\"timestamp\":1780371278963,\"type\":\"ui.lifecycle\",\"className\":\"CellView\",\"event\":\"onAppear\"},{\"type\":\"ui.lifecycle\",\"className\":\"CellView\",\"timestamp\":1780371278964,\"event\":\"onAppear\"},{\"event\":\"onAppear\",\"timestamp\":1780371278964,\"type\":\"ui.lifecycle\",\"className\":\"CellView\"},{\"timestamp\":1780371278964,\"event\":\"onAppear\",\"className\":\"CellView\",\"type\":\"ui.lifecycle\"},{\"event\":\"onAppear\",\"timestamp\":1780371278964,\"type\":\"ui.lifecycle\",\"className\":\"CellView\"},{\"type\":\"ui.lifecycle\",\"className\":\"CellView\",\"event\":\"onAppear\",\"timestamp\":1780371278964},{\"timestamp\":1780371278965,\"event\":\"onAppear\",\"className\":\"CellView\",\"type\":\"ui.lifecycle\"},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"className\":\"CellView\",\"timestamp\":1780371278965},{\"timestamp\":1780371278965,\"type\":\"ui.lifecycle\",\"className\":\"CellView\",\"event\":\"onAppear\"},{\"x\":\"39.666668\",\"action\":\"tap\",\"y\":\"83.333336\",\"targetClass\":\"_UIButtonBarButton\",\"targetId\":\"tap:unknown\",\"timestamp\":1780371292624,\"type\":\"user.event\"},{\"timestamp\":1780371293320,\"className\":\"AboutView\",\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\"},{\"event\":\"onDisappear\",\"className\":\"CellTitleView\",\"type\":\"ui.lifecycle\",\"timestamp\":1780371293321},{\"timestamp\":1780371293321,\"type\":\"ui.lifecycle\",\"className\":\"CellView\",\"event\":\"onDisappear\"},{\"timestamp\":1780371293321,\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\"},{\"timestamp\":1780371293322,\"className\":\"CellView\",\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780371293322,\"className\":\"CellView\",\"event\":\"onDisappear\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780371293322,\"className\":\"CellView\",\"event\":\"onDisappear\"},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"className\":\"CellView\",\"timestamp\":1780371293322},{\"type\":\"ui.lifecycle\",\"timestamp\":1780371293322,\"event\":\"onDisappear\",\"className\":\"CellView\"},{\"className\":\"CellView\",\"event\":\"onDisappear\",\"timestamp\":1780371293322,\"type\":\"ui.lifecycle\"},{\"timestamp\":1780371293323,\"event\":\"onDisappear\",\"className\":\"CellView\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780371293323,\"event\":\"onDisappear\",\"className\":\"CellView\"},{\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780371293323,\"className\":\"CellView\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780371293323,\"className\":\"CellView\",\"event\":\"onDisappear\"},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"timestamp\":1780371293323,\"className\":\"CellView\"},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"className\":\"CellTitleView\",\"timestamp\":1780371293323},{\"timestamp\":1780371295756,\"type\":\"ui.lifecycle\",\"event\":\"onAppear\",\"className\":\"HomeView\"},{\"type\":\"app.lifecycle\",\"timestamp\":1780371370264,\"event\":\"didEnterBackground\"},{\"event\":\"didFinishLaunch\",\"timestamp\":1780384612846,\"type\":\"app.lifecycle\"},{\"type\":\"system.event\",\"eventType\":\"orientation\",\"event\":\"unknown\",\"timestamp\":1780384612847},{\"type\":\"app.lifecycle\",\"timestamp\":1780384612884,\"event\":\"willEnterForeground\"},{\"className\":\"DemoView\",\"type\":\"ui.lifecycle\",\"event\":\"onAppear\",\"timestamp\":1780384612932},{\"event\":\"didBecomeActive\",\"timestamp\":1780384612962,\"type\":\"app.lifecycle\"},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780384620384,\"className\":\"AboutView\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780384620384,\"className\":\"CellTitleView\",\"event\":\"onAppear\"},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780384620384,\"className\":\"CellTitleView\"},{\"event\":\"onAppear\",\"className\":\"CellView\",\"timestamp\":1780384620423,\"type\":\"ui.lifecycle\"},{\"className\":\"CellView\",\"event\":\"onAppear\",\"timestamp\":1780384620423,\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"event\":\"onAppear\",\"className\":\"CellView\",\"timestamp\":1780384620423},{\"timestamp\":1780384620423,\"event\":\"onAppear\",\"className\":\"CellView\",\"type\":\"ui.lifecycle\"},{\"className\":\"CellView\",\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780384620423},{\"timestamp\":1780384620423,\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"event\":\"onAppear\"},{\"targetId\":\"tap:unknown\",\"x\":\"35.0\",\"targetClass\":\"_UIButtonBarButton\",\"timestamp\":1780384622336,\"type\":\"user.event\",\"action\":\"tap\",\"y\":\"80.333336\"},{\"timestamp\":1780384622910,\"className\":\"AboutView\",\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\"},{\"event\":\"onDisappear\",\"timestamp\":1780384622910,\"className\":\"CellTitleView\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"className\":\"CellView\",\"timestamp\":1780384622911},{\"event\":\"onDisappear\",\"timestamp\":1780384622911,\"className\":\"CellView\",\"type\":\"ui.lifecycle\"},{\"timestamp\":1780384622911,\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\"},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"className\":\"CellView\",\"timestamp\":1780384622911},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"timestamp\":1780384622911,\"className\":\"CellView\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780384622912,\"className\":\"CellView\",\"event\":\"onDisappear\"},{\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780384622913,\"className\":\"CellTitleView\"},{\"event\":\"didEnterBackground\",\"type\":\"app.lifecycle\",\"timestamp\":1780385497788},{\"type\":\"app.lifecycle\",\"timestamp\":1780386131122,\"event\":\"didFinishLaunch\"},{\"timestamp\":1780386131122,\"event\":\"unknown\",\"eventType\":\"orientation\",\"type\":\"system.event\"},{\"timestamp\":1780386131162,\"event\":\"willEnterForeground\",\"type\":\"app.lifecycle\"},{\"timestamp\":1780386131213,\"className\":\"DemoView\",\"type\":\"ui.lifecycle\",\"event\":\"onAppear\"},{\"type\":\"app.lifecycle\",\"timestamp\":1780386131250,\"event\":\"didBecomeActive\"},{\"className\":\"AboutView\",\"timestamp\":1780386132859,\"type\":\"ui.lifecycle\",\"event\":\"onAppear\"},{\"className\":\"CellTitleView\",\"timestamp\":1780386132859,\"event\":\"onAppear\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"className\":\"CellTitleView\",\"timestamp\":1780386132859,\"event\":\"onAppear\"},{\"className\":\"CellView\",\"event\":\"onAppear\",\"timestamp\":1780386132901,\"type\":\"ui.lifecycle\"},{\"event\":\"onAppear\",\"timestamp\":1780386132901,\"className\":\"CellView\",\"type\":\"ui.lifecycle\"},{\"event\":\"onAppear\",\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"timestamp\":1780386132901},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780386132901,\"className\":\"CellView\"},{\"type\":\"ui.lifecycle\",\"event\":\"onAppear\",\"timestamp\":1780386132901,\"className\":\"CellView\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780386132901,\"className\":\"CellView\",\"event\":\"onAppear\"},{\"y\":\"81.333336\",\"timestamp\":1780386143530,\"targetId\":\"tap:unknown\",\"action\":\"tap\",\"x\":\"38.333332\",\"type\":\"user.event\",\"targetClass\":\"_UIButtonBarButton\"},{\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\",\"className\":\"AboutView\",\"timestamp\":1780386144173},{\"event\":\"onDisappear\",\"className\":\"CellTitleView\",\"timestamp\":1780386144173,\"type\":\"ui.lifecycle\"},{\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"timestamp\":1780386144174},{\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"className\":\"CellView\",\"timestamp\":1780386144174},{\"timestamp\":1780386144174,\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\"},{\"timestamp\":1780386144174,\"className\":\"CellView\",\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\"},{\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780386144174,\"className\":\"CellView\"},{\"timestamp\":1780386144175,\"type\":\"ui.lifecycle\",\"event\":\"onDisappear\",\"className\":\"CellView\"},{\"event\":\"onDisappear\",\"type\":\"ui.lifecycle\",\"className\":\"CellTitleView\",\"timestamp\":1780386144176},{\"type\":\"app.lifecycle\",\"timestamp\":1780386251485,\"event\":\"didEnterBackground\"},{\"timestamp\":1780396190113,\"type\":\"app.lifecycle\",\"event\":\"didFinishLaunch\"},{\"timestamp\":1780396190113,\"event\":\"unknown\",\"eventType\":\"orientation\",\"type\":\"system.event\"},{\"timestamp\":1780396190153,\"event\":\"willEnterForeground\",\"type\":\"app.lifecycle\"},{\"event\":\"onAppear\",\"type\":\"ui.lifecycle\",\"className\":\"DemoView\",\"timestamp\":1780396190240},{\"timestamp\":1780396190268,\"type\":\"app.lifecycle\",\"event\":\"didBecomeActive\"},{\"timestamp\":1780396196142,\"type\":\"app.lifecycle\",\"event\":\"didEnterBackground\"},{\"timestamp\":1780487239443,\"type\":\"app.lifecycle\",\"event\":\"didFinishLaunch\"},{\"type\":\"system.event\",\"timestamp\":1780487239443,\"eventType\":\"orientation\",\"event\":\"unknown\"},{\"timestamp\":1780487239493,\"type\":\"app.lifecycle\",\"event\":\"willEnterForeground\"},{\"className\":\"RootViewController\",\"type\":\"ui.lifecycle\",\"timestamp\":1780487239495,\"event\":\"viewDidLoad\"},{\"type\":\"ui.lifecycle\",\"className\":\"RootViewController\",\"timestamp\":1780487239505,\"event\":\"viewWillAppear\"},{\"type\":\"app.lifecycle\",\"timestamp\":1780487239519,\"event\":\"didBecomeActive\"},{\"timestamp\":1780487239529,\"event\":\"viewDidAppear\",\"className\":\"RootViewController\",\"type\":\"ui.lifecycle\"},{\"targetId\":\"tap:Auto Screen Tracking   ->\",\"action\":\"tap\",\"x\":\"196.33333\",\"y\":\"617.3333\",\"timestamp\":1780487242045,\"type\":\"user.event\",\"targetClass\":\"UIButton\"},{\"event\":\"viewDidLoad\",\"timestamp\":1780487242220,\"className\":\"HomeViewController\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"event\":\"viewWillAppear\",\"className\":\"HomeViewController\",\"timestamp\":1780487242220},{\"timestamp\":1780487242787,\"event\":\"viewDidDisappear\",\"className\":\"RootViewController\",\"type\":\"ui.lifecycle\"},{\"timestamp\":1780487242787,\"event\":\"viewDidAppear\",\"className\":\"HomeViewController\",\"type\":\"ui.lifecycle\"},{\"action\":\"tap\",\"x\":\"155.33333\",\"timestamp\":1780487243418,\"y\":\"219.33333\",\"targetClass\":\"UITableViewCell\",\"targetId\":\"tap:Test Push\",\"type\":\"user.event\"},{\"event\":\"viewDidLoad\",\"timestamp\":1780487243514,\"className\":\"TestPushViewController\",\"type\":\"ui.lifecycle\"},{\"event\":\"viewWillAppear\",\"timestamp\":1780487244516,\"type\":\"ui.lifecycle\",\"className\":\"TestPushViewController\"},{\"timestamp\":1780487245017,\"event\":\"viewDidDisappear\",\"className\":\"HomeViewController\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780487245017,\"event\":\"viewDidAppear\",\"className\":\"TestPushViewController\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780487245294,\"className\":\"HomeViewController\",\"event\":\"viewWillAppear\"},{\"timestamp\":1780487245769,\"className\":\"TestPushViewController\",\"type\":\"ui.lifecycle\",\"event\":\"viewDidDisappear\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780487245770,\"className\":\"HomeViewController\",\"event\":\"viewDidAppear\"},{\"action\":\"tap\",\"type\":\"user.event\",\"x\":\"177.66667\",\"timestamp\":1780487246361,\"targetId\":\"tap:Test Container\",\"targetClass\":\"UITableViewCell\",\"y\":\"362.33334\"},{\"timestamp\":1780487246444,\"className\":\"SecondViewController\",\"type\":\"ui.lifecycle\",\"event\":\"viewDidLoad\"},{\"type\":\"ui.lifecycle\",\"event\":\"viewDidLoad\",\"className\":\"FirstViewController\",\"timestamp\":1780487246445},{\"timestamp\":1780487246445,\"event\":\"viewDidLoad\",\"className\":\"TestContainerViewController\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"event\":\"viewWillAppear\",\"timestamp\":1780487246445,\"className\":\"TestContainerViewController\"},{\"className\":\"SecondViewController\",\"timestamp\":1780487246445,\"type\":\"ui.lifecycle\",\"event\":\"viewWillAppear\"},{\"event\":\"viewWillAppear\",\"className\":\"FirstViewController\",\"type\":\"ui.lifecycle\",\"timestamp\":1780487246445},{\"timestamp\":1780487246937,\"className\":\"HomeViewController\",\"event\":\"viewDidDisappear\",\"type\":\"ui.lifecycle\"},{\"className\":\"TestContainerViewController\",\"event\":\"viewDidAppear\",\"type\":\"ui.lifecycle\",\"timestamp\":1780487246937},{\"event\":\"viewDidAppear\",\"className\":\"SecondViewController\",\"timestamp\":1780487246938,\"type\":\"ui.lifecycle\"},{\"className\":\"FirstViewController\",\"type\":\"ui.lifecycle\",\"event\":\"viewDidAppear\",\"timestamp\":1780487246938},{\"type\":\"ui.lifecycle\",\"timestamp\":1780487247469,\"event\":\"viewWillAppear\",\"className\":\"HomeViewController\"},{\"className\":\"TestContainerViewController\",\"type\":\"ui.lifecycle\",\"event\":\"viewDidDisappear\",\"timestamp\":1780487247954},{\"type\":\"ui.lifecycle\",\"timestamp\":1780487247954,\"className\":\"SecondViewController\",\"event\":\"viewDidDisappear\"},{\"event\":\"viewDidDisappear\",\"type\":\"ui.lifecycle\",\"className\":\"FirstViewController\",\"timestamp\":1780487247954},{\"className\":\"HomeViewController\",\"timestamp\":1780487247954,\"type\":\"ui.lifecycle\",\"event\":\"viewDidAppear\"},{\"className\":\"RootViewController\",\"type\":\"ui.lifecycle\",\"timestamp\":1780487248685,\"event\":\"viewWillAppear\"},{\"event\":\"viewDidDisappear\",\"timestamp\":1780487249170,\"className\":\"HomeViewController\",\"type\":\"ui.lifecycle\"},{\"timestamp\":1780487249170,\"className\":\"RootViewController\",\"type\":\"ui.lifecycle\",\"event\":\"viewDidAppear\"},{\"targetClass\":\"UIButton\",\"timestamp\":1780487249876,\"x\":\"177.0\",\"y\":\"262.0\",\"action\":\"tap\",\"type\":\"user.event\",\"targetId\":\"tap:Network  ->\"},{\"type\":\"ui.lifecycle\",\"className\":\"NetworkTrackingViewController\",\"timestamp\":1780487249979,\"event\":\"viewDidLoad\"},{\"event\":\"viewWillAppear\",\"timestamp\":1780487249983,\"className\":\"NetworkTrackingViewController\",\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"event\":\"viewDidDisappear\",\"timestamp\":1780487250469,\"className\":\"RootViewController\"},{\"className\":\"NetworkTrackingViewController\",\"timestamp\":1780487250469,\"type\":\"ui.lifecycle\",\"event\":\"viewDidAppear\"},{\"targetId\":\"tap:Network Data Publisher\",\"timestamp\":1780487251260,\"y\":\"442.33334\",\"action\":\"tap\",\"type\":\"user.event\",\"x\":\"191.0\",\"targetClass\":\"UIButton\"},{\"timestamp\":1780487251478,\"url\":\"http:\\\/\\\/www.127.0.0.1:10002\\\/api\\\/server\",\"statusCode\":\"600\",\"type\":\"network.request\"},{\"type\":\"user.event\",\"y\":\"488.0\",\"targetClass\":\"UIButton\",\"action\":\"tap\",\"x\":\"181.33333\",\"targetId\":\"tap:Network Data Delegate\",\"timestamp\":1780487252293},{\"timestamp\":1780487252397,\"statusCode\":\"600\",\"type\":\"network.request\",\"url\":\"http:\\\/\\\/www.127.0.0.1:10003\\\/api\\\/server\"},{\"action\":\"tap\",\"targetClass\":\"UIButton\",\"x\":\"180.66667\",\"targetId\":\"tap:Custom Network Error\",\"timestamp\":1780487252844,\"type\":\"user.event\",\"y\":\"535.0\"},{\"statusCode\":\"600\",\"timestamp\":1780487252975,\"url\":\"http:\\\/\\\/www.127.0.0.1:10000\\\/api\\\/server\",\"type\":\"network.request\"},{\"className\":\"RootViewController\",\"event\":\"viewWillAppear\",\"timestamp\":1780487254036,\"type\":\"ui.lifecycle\"},{\"type\":\"ui.lifecycle\",\"className\":\"NetworkTrackingViewController\",\"timestamp\":1780487254519,\"event\":\"viewDidDisappear\"},{\"type\":\"ui.lifecycle\",\"timestamp\":1780487254519,\"className\":\"RootViewController\",\"event\":\"viewDidAppear\"},{\"eventType\":\"orientation\",\"timestamp\":1780487255685,\"type\":\"system.event\",\"event\":\"landscape\"},{\"event\":\"portrait\",\"type\":\"system.event\",\"timestamp\":1780487257332,\"eventType\":\"orientation\"},{\"event\":\"landscape\",\"eventType\":\"orientation\",\"type\":\"system.event\",\"timestamp\":1780487258383},{\"timestamp\":1780487259579,\"eventType\":\"orientation\",\"type\":\"system.event\",\"event\":\"portrait\"},{\"targetClass\":\"UIButton\",\"action\":\"tap\",\"x\":\"238.0\",\"targetId\":\"tap:Error\",\"timestamp\":1780487261426,\"type\":\"user.event\",\"y\":\"318.33334\"},{\"targetId\":\"tap:Auto Screen Tracking   ->\",\"action\":\"tap\",\"y\":\"611.3333\",\"type\":\"user.event\",\"targetClass\":\"UIButton\",\"x\":\"193.33333\",\"timestamp\":1780487263077}]",
      "deviceModel" : "arm64",
      "appVersion" : "1.1",
      "sdkVersion" : "3.15.12",
      "netState" : "wifi"
    },
    "VER" : "3.15.12",
    "msg" : "AppError(reason: \"There was an error fooing\", underlyingError: nil)",
    "line" : 156,
    "url" : "Example-UIKit"
  }
];

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
    case 'system.event':
      return `${bc.eventType} → ${bc.event}`;
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

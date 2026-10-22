const CACHE_PREFIX = "aws-en-";
const CACHE = CACHE_PREFIX + "794e11d0d6e610f09b3f39b3";

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./manifest.json",
  "./app.js",
  "./serial-bridge.js",
  "./webview-stub.js",
  "./logger.js",
  "./log-storage.js",
  "./log-analyzer.js",
  "./geo-utils.js",
  "./color-cache.js",
  "./vincenty.js",
  "./haversine.js",
  "./achod-bearing-filter.js",
  "./dh-filter.js",
  "./median.js",
  "./smoother.js",
  "./dh-filter-xyz.js",
  "./smoother-xyz.js",
  "./calibration.js",
  "./gnss-parser.js",
  "./azm-parser.js",
  "./antenna-corrector.js",
  "./antenna-table-calibration.js",
  "./sound-speed.js",
  "./azm-manager.js",
  "./utm.js",
  "./tracks.js",
  "./poi-manager.js",
  "./csv.js",
  "./export.js",
  "./modules/ui-themes.js",
  "./modules/ui-settings.js",
  "./modules/ui-ruler.js",
  "./modules/ui-topo.js",
  "./modules/ui-calibration.js",
  "./modules/ui-antenna-calibration.js",
  "./modules/ui-canvas.js",
  "./modules/ui-wizard.js",
  "./README.html",
  "./CHANGELOG.html",
  "./docs/guide.html",
  "./tools/azmclogparser.html",
  "./tools/coord-converter.html",
  "./localization/i18n.js",
  "./localization/languages.js",
  "./docs/guide-en-wizard-antenna.jpg",
  "./docs/guide-en-wizard-reference.jpg",
  "./docs/guide-en-top-bar.jpg",
  "./docs/guide-en-map.jpg",
  "./docs/guide-en-beacon-panel.jpg",
  "./docs/guide-en-antenna-info.jpg",
  "./docs/guide-en-reference-panel.jpg",
  "./docs/guide-en-reference-status.jpg",
  "./docs/guide-en-reference-map.jpg"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
    // 1. Не трогаем чужие origin'ы (CDN, GitHub, docs и т.д.)
    const url = new URL(event.request.url);
    if (url.origin !== location.origin) {
        return;
    }
    
    // 2. Навигационные запросы — сначала точное совпадение, потом fallback на index.html    
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.open(CACHE).then(cache => cache.match(event.request, { ignoreSearch: true })).then((cached) => {
                if (cached) return cached;
                return caches.open(CACHE).then(cache => cache.match('./index.html')).then((index) => {
                    return index || fetch(event.request);
                });
            })
        );
        return;
    }
    
    // 3. Остальные запросы — cache-first с игнором query string
    event.respondWith(
        caches.open(CACHE).then(cache => cache.match(event.request, { ignoreSearch: true })).then((cached) => {
            return cached || fetch(event.request);
        })
    );
});
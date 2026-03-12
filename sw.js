// RNLI Atlantic 85 Training — Service Worker
// Caches all app files for full offline use.
// Bump CACHE_VERSION to force an update after editing content files.

const CACHE_VERSION = 'a85-v1';
const ASSETS = [
  './',
  './index.html',
  './config.js',
  './notes.js',
  './questions.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Also cache the Google Fonts used by the app
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Condensed:wght@600;700&display=swap'
];

// ─── INSTALL: pre-cache all core assets ───
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      // Cache local assets (these must succeed)
      return cache.addAll(ASSETS).then(() => {
        // Try to cache fonts but don't fail install if offline
        return Promise.allSettled(
          FONT_URLS.map(url => cache.add(url).catch(() => {}))
        );
      });
    }).then(() => self.skipWaiting())
  );
});

// ─── ACTIVATE: clean up old caches ───
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ─── FETCH: cache-first for local assets, network-first for external ───
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // For same-origin requests (our app files): cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          // Cache any new same-origin requests we fetch
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
    );
    return;
  }

  // For external requests (fonts, logo image): stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});

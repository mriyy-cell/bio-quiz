const CACHE_NAME = 'bio-quest-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './questions.json',
  './manifest.json'
];

// インストール時にキャッシュを保存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエスト発生時にキャッシュから返却（オフライン対応）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
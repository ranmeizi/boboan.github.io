const BasePath = '/boboan.github.io'
const CACHE_PREFIX = 'boboan-web-cache';
const CACHE_VERSION = '0.0.5'
const CACHE_NAME = CACHE_PREFIX + '-' + CACHE_VERSION;
const publicCaches = [
  '/images/tags/js.jpg',
  '/images/tags/webpack.webp',
  '/images/ji.png',
  '/images/screeps.png',
  '/live2d/草神/草神.4096/texture_00.png',
  '/live2d/草神/motions/idle.motion3.json',
  '/live2d/草神/motions/special head.motion3.json',
  '/live2d/草神/motions/special.motion3.json',
  '/live2d/草神/草神.cdi3.json',
  '/live2d/草神/草神.moc3',
  '/live2d/草神/草神.model3.json',
  '/live2d/草神/草神.physics3.json',
  '/live2d/js/jquery.min.js',
  '/live2d/js/l2d.js',
  '/live2d/js/live2dcubismcore.min.js',
  '/live2d/js/live2dcubismframework.js',
  '/live2d/js/live2dcubismpixi.js',
  '/live2d/js/pixi.min.js',
  '/prism/prism.js',
  '/prism/prism.css',
  '/favicon.ico',
  '/'
].map(path => BasePath + path)

async function deleteCaches() {
  return caches.keys().then(function (keys) {
    var all = keys.map(function (key) {
      return caches.delete(key);
    });
    return Promise.all(all);
  });
}

//sw激活阶段,说明上一sw已失效
self.addEventListener('activate', function (event) {
  console.log('[Service Worker] activate delete cache here');
  event.waitUntil(
    deleteCaches()
  );
});

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(publicCaches);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
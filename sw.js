const CACHE_NAME = 'alkhulafau-pwa-v1';
const ASSETS = [
  '/', '/index.html', '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(()=>console.warn('Some assets failed to cache'))));
});
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if(url.origin !== location.origin){
    event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
  } else {
    event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request).then(r=>{ caches.open(CACHE_NAME).then(c=>c.put(event.request, r.clone())); return r; }).catch(()=>caches.match('/'))));
  }
});
const CACHE_NAME = "ver1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;
//install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(cache);
      cache.addAll(urlsToCache);
    })
  );
});

//listen for request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

//activate
self.addEventListener("activate", (event) => {
  const whiteList = [];
  whiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!whiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

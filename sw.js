const CACHE = "daily-magic-v5";
const CORE = ["./","./index.html","./style.css","./toolverse.css","./daily-magic.css","./tool-registry.js","./toolverse.js","./manifest.webmanifest","./icon.svg","./icon-192.svg","./icon-512.svg","./app-shell.css","./app-shell.js"];
const APP_ASSET = /\.(?:html|css|js|webmanifest|svg)$/i;
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  const url = new URL(event.request.url);
  const relativePath = url.pathname.split("/").pop() || "index.html";
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (APP_ASSET.test(url.pathname)) {
      try {
        const response = await fetch(event.request, {cache:"no-cache"});
        if (response && response.ok) await cache.put(event.request, response.clone());
        return response;
      } catch (error) {
        return await cache.match(event.request) || await cache.match("./" + relativePath) || (event.request.mode === "navigate" ? await cache.match("./index.html") : Response.error());
      }
    }
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch (error) {
      return event.request.mode === "navigate" ? await cache.match("./index.html") : Response.error();
    }
  })());
});
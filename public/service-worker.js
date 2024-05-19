const CACHE_NAME = 'boord-v1'
const urlsToCache = [
    'index.html',
    'offline.html',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    )
})

const cacheName = 'cache-v1';
const precacheFiles = [
    '/',
    'index.html',
    'css/style.css',
];

self.addEventListener('install', event => {
    console.log('sw install event!');
    event.waitUntil(
        caches.open(cacheName)
         .then(cache => {
             return cache.addAll(precacheFiles);
         })
    )
});

self.addEventListener('fetch', event => {
    console.log('sw fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request)
         .then(response => {
             if(response) {
                 console.log('Found ', event.request.url, 'in cache');
                 return response;
             }
             return fetch(event.request);
             // TODO: Add fetched files to cache
         })
         .catch(error => {
             console.log('Error ', error);
             // TODO: Respond with custom offline page
         })
    )
})
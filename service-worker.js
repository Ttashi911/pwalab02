
/**
 * On Install Event
 * Trigerred when the service worker is installed.
 */
self.addEventListener('install', (event) => {
console.log('[SW] Install:', event);

//Activates itself when it enters the waiting phase.
 self.skipWaiting();
});

/**
 * On Activate Event
 * Trigerred when the service worker is activated.
 */
self.addEventListener('activate', (event) => {
console.log('[SW] Active:', event);

//Immediately get control over the open pages.
    event.waitUntil(client.claim());
});

self.addEventListener ('fetch', () => {
return;
});


(function() {
    'use strict';
    //TODO: get video height and width, calculate based on viewport

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./service-worker.js')
                 .then(function() { console.log('Service Worker Registered'); });
      }
})();
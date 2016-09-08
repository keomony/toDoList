/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// Insert your service worker code here
self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open('static-cache-v2')
        .then(function(cache) {
          return cache.addAll([
            '/',
            'index.html',
            'js/main.js',
            'css/style.css'
          ]);
        })
    );
});

// TODO - add the fetch event listener here
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request)
  .then(function(response) {
    if (response) {
      return response;
    }
    return fetch(event.request);
  })
  .catch(function() {
    console.log('resource not available');
  })
  );
});
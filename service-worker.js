/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","e11429dbeffbfb271cde6e9c3d41db3d"],["/manifest.json","bc72a6ba9db12e00d6c64ec14540775b"],["/src/dev-element/dev-contact.html","cf6b37375d200f20a228aee57e594538"],["/src/dev-element/dev-element.html","fe305f5b743e58349771147ddc618ecf"],["/src/dev-element/dev-error404.html","d9d8a6a2a16df62de25e633ed8f86be5"],["/src/dev-element/dev-member.html","fb40efbda2b396ce86b91956bb7ad92d"],["/src/dev-element/dev-overview.html","64409339443bd51a1871a3218c1b53d4"],["/src/dev-element/dev-projects.html","db71816e87766ff2d5d8e47aaaa12ee0"],["/src/dev-element/dev-research.html","17577a934e175235606d955e458edea7"],["/src/dev-element/dev-team.html","c33e6db4f2fde37114bb4b22890da72f"],["/src/error404-element/error404-element.html","cb7c680aa81f874046f6b8b00f3977b7"],["/src/fnndsc-app.html","7a95be5fe56c342605f5b0b096a8dbe1"],["/src/fnndsc-element/fnndsc-contact.html","258b5880d235ed1d93655b5836ba5591"],["/src/fnndsc-element/fnndsc-element.html","9f7bcbb321830fbba30e609aad67c9b9"],["/src/fnndsc-element/fnndsc-error404.html","300da0225bed8ea87b5f8e963dafd73d"],["/src/fnndsc-element/fnndsc-member.html","c8057c530a165b29551f9eb66a342e14"],["/src/fnndsc-element/fnndsc-news.html","81aaacdcfaa4c43f6ebc4ff88d301922"],["/src/fnndsc-element/fnndsc-opportunities.html","3084fb31cda2b644c1907bc2b2cf656f"],["/src/fnndsc-element/fnndsc-overview.html","d927455b1a982e88cbc647764ffa4a0d"],["/src/fnndsc-element/fnndsc-team.html","d1c8ce6bdbfc0bd598667318b99e3432"],["/src/meg-element/meg-contact.html","7d53d45499f23fcdae7f25fa517c4dd2"],["/src/meg-element/meg-element.html","961a389dded0e0f1f52b7ea8351279f6"],["/src/meg-element/meg-error404.html","4e958e28a300ac161a3bb2456bb7157b"],["/src/meg-element/meg-labs.html","46f9026a1ffbd6d8f19837771d589f60"],["/src/meg-element/meg-member.html","7a00ad0026a40a4b695a32dd2af35ae1"],["/src/meg-element/meg-overview.html","b745f33d7678f4f0ecb84f6c5129b070"],["/src/meg-element/meg-projects.html","86ff00c61cac7e11156559f13bd7d596"],["/src/meg-element/meg-research.html","c19cde18ed939dfc2fdb4a087caccd73"],["/src/meg-element/meg-team.html","dbc8dfa3bb6578337eaa02778d25ce84"],["/src/mri-element/mri-contact.html","f1a0f7691995aacef82d343280677cea"],["/src/mri-element/mri-element.html","fa805a744c71cef261ab85c0cc4d686d"],["/src/mri-element/mri-error404.html","30ed594d331599fdf3e3f873f18fd084"],["/src/mri-element/mri-labs.html","091fff0a289d4ed775b19ca73f2c3acb"],["/src/mri-element/mri-member.html","97e3fe4b7025530ed76402e53fac5915"],["/src/mri-element/mri-overview.html","a545012df9ba66120bbd7af6317f0e9e"],["/src/mri-element/mri-projects.html","d5a8d3e2127f4bb4307abe19615338c6"],["/src/mri-element/mri-research.html","86bcb5ea280f40455551958ddb888639"],["/src/mri-element/mri-team.html","38938f3604d892220c27a0dd89e83577"],["/src/nirs-element/nirs-contact.html","0059e101412e1048944d5117375a3da6"],["/src/nirs-element/nirs-element.html","1a7ee37801ff423b257db832520c8b79"],["/src/nirs-element/nirs-error404.html","17f14d7e0f7fa7b19a7f29a04324111b"],["/src/nirs-element/nirs-labs.html","271695d4847d9e8bce4e78b55fafe934"],["/src/nirs-element/nirs-member.html","d3563f2396c8ba79a0f178c8a101bc2a"],["/src/nirs-element/nirs-overview.html","fb4c777d7a1b87bee24900b12aeb2064"],["/src/nirs-element/nirs-projects.html","a0115dc9eb2553d3f74e531bb7086493"],["/src/nirs-element/nirs-research.html","a45051105458748c47f2cc6060b9f789"],["/src/nirs-element/nirs-team.html","97a3020c71daad3f723efc770cf4d190"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = 'index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});





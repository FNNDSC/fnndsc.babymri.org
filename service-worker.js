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
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/images/art/22_cropped.png","fd3e2c2118b7ebe201ce4a04b61c1020"],["/images/art/33.jpg","c5548d341c1cf22d1ab17a8bd3332fd3"],["/images/art/BespokeSoftwareCode.jpg","2d9d95046445090e8a49062b79469c29"],["/images/art/ChRIS-PacsPull-1.png","61332b0b16709b0080173726789d9673"],["/images/art/ChRIS-overview.png","8ab2a4ec1e9e2891fbe15e5d04067a6b"],["/images/art/MEG_brain_mapping.jpg","a50acd3feef2f8140f65a1c3aef32b6b"],["/images/art/abstract_neurons_darkBlue.jpg","948da131f8c99a14a2f014239a268ebb"],["/images/art/ami_fusion.png","b4fa2cd6d44fe9cc3d66143d41e4d301"],["/images/art/ami_volumerendering.png","63116e1c1e22c162d8855016323f77aa"],["/images/art/baby-1280x1024.jpg","fb9a33297d349fa056b54cb5e8216de2"],["/images/art/babybrainupdated.svg","4a0699d1b2f8ca4f1babebe01cb85827"],["/images/art/babybrainupdated2.svg","e00928c0fb6763b3ce1962a291dd5d09"],["/images/art/babybrainupdated3.svg","77e77e4cabf8241afa59ee3a2dafb533"],["/images/art/babybrainupdated4.svg","c8a695ff7d8b8151b241ae6524e72f01"],["/images/art/babybrainupdated5.svg","605d3662931fe06cc093bcbe80871351"],["/images/art/babybrainupdated6.svg","7298db6309707c02f052d2933ac3e49e"],["/images/art/background_dark_lights.jpg","b00484d062ac26fa12f5c5b5d47c8136"],["/images/art/binary-code.jpg","c561f5420cf814baf31f13a1280ea09e"],["/images/art/bioinformatics.jpg","25398af68509ced242221977bfd079ca"],["/images/art/blueprint.png","87f886510d2c0fca48c06ab9278b1651"],["/images/art/brain_gears.jpg","e57ce30a8ffcac587673fb35b3694237"],["/images/art/brain_gears.svg","e96938ad5e342db719e8b95d26544681"],["/images/art/data.jpg","285d69568d74ee159a974adb89f9d6a0"],["/images/art/dev_chris-concept.png","ea4795ea303cc75c50e499fe31265fd2"],["/images/art/logo_gray.png","5f3868a464283848d8c05d0ea60241b7"],["/images/art/logo_gray_white_bg.png","1497b877fde9aa66c10e577059693df7"],["/images/art/mri_T1_SAG.jpg","4597b3b340015db76a0ec25c6fba01c8"],["/images/art/neuron-greenStain.jpg","0c72bc0cca2e278ac222486b814c431b"],["/images/art/neurons-blueBackground.jpg","835d847647c78fec4821f35f382c1d76"],["/images/art/neurons-blur.jpg","0d94d6005eacd8e657bbad8390b94ebf"],["/images/art/neurons-dark.jpg","74446edc09a054b186bffaba0ee8dae3"],["/images/art/neurons.jpg","844225ca23057c61fd0b4510b360fd15"],["/images/art/opensource.jpg","2388bfc74ad956718388ca7a17e34d37"],["/images/team/Angela_Fenoglio.jpg","82f7ee7be5b89cba3c124d7fa9520360"],["/images/team/Angela_Fenoglio_110x135.jpg","0e23467418bfadf74ae2ebf2333ff46a"],["/images/team/Anonymous.jpg","a1e866071d8eff4bed737ace7c380b6d"],["/images/team/Anonymous_110x135.jpg","c4f910b50ffae0993d9b67b7e08e74fc"],["/images/team/Banu_Ahtam.jpg","f37509f63eed5be5ec9003ca7b4719d4"],["/images/team/Banu_Ahtam_110x135.jpg","45b67d41ca4a503d10c1eccadaba6a77"],["/images/team/Borjan_Gagoski.jpg","f8a5c2e22fe9b6449612dc7837299ea1"],["/images/team/Borjan_Gagoski_110x135.jpg","503d09ee7b2b583d185f3faa57d8c3fb"],["/images/team/Chiran_Doshi.jpg","84c1b5346cc1c0a275a0e4b334d2a76e"],["/images/team/Chiran_Doshi_110x135.jpg","ad884454b61196f6f919194e0e91fea9"],["/images/team/Christine_Charvet.jpg","999b10cb9cc76eb4d66a31a690a71ed3"],["/images/team/Christine_Charvet_110x135.jpg","52e3a61f47c8da85e64f794a5b2b9092"],["/images/team/Christos_Papadelis.jpg","e0e9e747a4b3ea15559047a6aef53711"],["/images/team/Christos_Papadelis_110x135.jpg","5e9d56ad3af5227614674e171584eacc"],["/images/team/Danielle_Sliva.jpg","266b47cee195f56d8cad562e45ef1b20"],["/images/team/Danielle_Sliva_110x135.jpg","03aa280b1d7a840736da9d34ed5cf7ce"],["/images/team/Elizabeth_Engle.jpg","09b85c102010b967dcb58131d69a9fcc"],["/images/team/Elizabeth_Engle_110x135.jpg","ec1e4bbfba16732020776bf1f5b7f977"],["/images/team/Emi_Takahashi.jpg","177425e52e3415e54052307f4b6234dd"],["/images/team/Emi_Takahashi_110x135.jpg","f8eee81ee9b5d1beaf6c89b70825121f"],["/images/team/Emily_Seibring.jpg","3669b389ad7ee7675f2b851b8f2ad95c"],["/images/team/Emily_Seibring_110x135.jpg","9860d91b7793fd60aab658624bb44916"],["/images/team/Gemma_Arca.jpg","e892f8c68377fdd273c304ee8b6ba973"],["/images/team/Gemma_Arca_110x135.jpg","f81c0099c0e02647d94df209c56d4a75"],["/images/team/Heather_Leosz.jpg","f730c2b356d908af7ab177e1711e5079"],["/images/team/Heather_Leosz_110x135.jpg","131f0817968516fc8ecbaf533c689aef"],["/images/team/Jorge_Bernal.jpg","d87be56f8b0f4d9d8949c94f66167643"],["/images/team/Jorge_Bernal_110x135.jpg","a36bac728e9fca5ecf6a5e611379ea67"],["/images/team/Kiho_Im.jpg","abf42962f15ebb49da6dfc5843bc8b50"],["/images/team/Kiho_Im_110x135.jpg","95a3567c585f75f75238c1d8c57b6ecb"],["/images/team/Lilla_Zollei.jpg","fb37ab9ba5f4492ae0b5ac563db414c6"],["/images/team/Lilla_Zollei_110x135.jpg","072671cf415ee5a5c56b217914e40c9f"],["/images/team/Limin_Sun.jpg","e3288a088eacc828e53b963d5b7a0a01"],["/images/team/Limin_Sun_110x135.jpg","b5ba67c63b02c4358a0c23a7e4687829"],["/images/team/Maia_Peeva.jpg","2904b77c545ae8b85417f244cee80bcf"],["/images/team/Maia_Peeva_110x135.jpg","7d7ca2b40cae6f295c5d4d1111ccebe8"],["/images/team/Marie_Drottar.jpg","0d9ae2e2c3255516495bcfc2f3d0d1a1"],["/images/team/Marie_Drottar_110x135.jpg","97c25665ba6f934e81ddc99f5a5de349"],["/images/team/Mathieu_Dehaes.jpg","de1b7ab6fd9cb1ef08d0315c82bce3af"],["/images/team/Mathieu_Dehaes_110x135.jpg","591442767be91c10bbca4dd45d12418c"],["/images/team/Nadine_Gaab.jpg","d39db54dd95f834491baa7645db07701"],["/images/team/Nadine_Gaab_110x135.jpg","36246e3f61059720ea0ae27d29ad4863"],["/images/team/Nicolas_Rannou.jpg","5405a6bfea9fdb289ccfda7b52bbf21e"],["/images/team/Nicolas_Rannou_110x135.jpg","e709be8c7db1cc1df0255a450145b913"],["/images/team/Nicolas_Rannou_110x135.png","ca3d2119400e103afed7cbfe5b13d190"],["/images/team/Nicolas_Rannou_old.jpg","6d3035a4adc03f52aa276d52434c98cc"],["/images/team/Patricia_Grant.jpg","adf02310ab03a5918dec2d034dd1031d"],["/images/team/Patricia_Grant_110x135.jpg","9bf04de24e5cefa9f50e4c5fef92ce37"],["/images/team/Rongpin_Wang.jpg","fe300ac3aa3595558d312bc8290e44b1"],["/images/team/Rongpin_Wang_110x135.jpg","6d6de89b301dd17424060319553dc3af"],["/images/team/Rudolph-chapmans.jpg","438098d68404bb024322b08ae0f73100"],["/images/team/Rudolph_Pienaar.jpg","bdf8d0428a2e1b7cb3df2ef29a6d3fe9"],["/images/team/Rudolph_Pienaar_110x135.jpg","91e7a77ce8048c8c6c54fd28acbf8ff8"],["/images/team/Rutvi_Vyas.jpg","f3cb4b557f086fb4cbbfc8b3ae27f02b"],["/images/team/Rutvi_Vyas_110x135.jpg","2df0965fb18e92e942562ccf94605b58"],["/images/team/Silvina_Ferradal.png","22c59e8beb2aead73bdf40bbb729f06b"],["/images/team/Stephanie_Jones.jpg","baf7f8a5fb9e2e96983c387aedf627e0"],["/images/team/Stephanie_Jones_110x135.jpg","c5d32277085c52f163df2f674d16b53d"],["/images/team/Tapsya_Nayak.jpg","ce979d202d7e39fe75d8f3adef139441"],["/images/team/Tapsya_Nayak_110x135.jpg","1cb6da64b47acc15685266e05c2df1d7"],["/images/team/Thomas_Re.jpg","f55bd11f02cdbba72f331e34429519a0"],["/images/team/Thomas_Re_110x135.jpg","313fbf47e414e6e0f7b68538e199f707"],["/images/team/Tomo_Tarui.jpg","93535e8fe4f9528d6ef76506aea5ff5d"],["/images/team/Tomo_Tarui_110x135.jpg","b15ed4aad3eb9ec07e26717b6b0792bf"],["/images/team/Yoshio_Okada.jpg","febccd2d3deae8fde6eeee9452b5a990"],["/images/team/Yoshio_Okada_110x135.jpg","2f67f55207efa00198a0bed72bc8c4e9"],["/images/team/banu-10p.jpg","5f916e52299f7d2c7496409515deedaa"],["/images/team/banu.jpg","263f695809de653fd281fe0497489dd9"],["/images/team/danginsburg.jpg","f1a587cc12a3002b143c5d7957ec95cb"],["/images/team/danielHaehn.jpg","8e7c6a8c854f4176c3c31a19a0f70a46"],["/images/team/katie-cropped.jpg","28044da9d9e4742188796f6587a8bfa3"],["/index.html","ac8eb36cc98c8f6cfd64b1f23d8f2773"],["/manifest.json","bc72a6ba9db12e00d6c64ec14540775b"],["/src/dev-element/dev-contact.html","cf6b37375d200f20a228aee57e594538"],["/src/dev-element/dev-element.html","fe305f5b743e58349771147ddc618ecf"],["/src/dev-element/dev-error404.html","d9d8a6a2a16df62de25e633ed8f86be5"],["/src/dev-element/dev-member.html","fb40efbda2b396ce86b91956bb7ad92d"],["/src/dev-element/dev-overview.html","d9340d28f884fdeead4abf994d2b1d0d"],["/src/dev-element/dev-projects.html","4668179b3ad0061c76b8a8c78163b51a"],["/src/dev-element/dev-research.html","6232365bb24c7056bca1e4a48a77f919"],["/src/dev-element/dev-team.html","c33e6db4f2fde37114bb4b22890da72f"],["/src/error404-element/error404-element.html","cb7c680aa81f874046f6b8b00f3977b7"],["/src/fnndsc-app.html","c0b70211671475f014d7e7c643b9554e"],["/src/fnndsc-element/fnndsc-contact.html","258b5880d235ed1d93655b5836ba5591"],["/src/fnndsc-element/fnndsc-element.html","9f7bcbb321830fbba30e609aad67c9b9"],["/src/fnndsc-element/fnndsc-error404.html","300da0225bed8ea87b5f8e963dafd73d"],["/src/fnndsc-element/fnndsc-member.html","c8057c530a165b29551f9eb66a342e14"],["/src/fnndsc-element/fnndsc-news.html","390f01b2acd1bfb9f498374c8fd530e8"],["/src/fnndsc-element/fnndsc-opportunities.html","b467accce221df0b837b823a50e97b02"],["/src/fnndsc-element/fnndsc-overview.html","053a82cfdffe52997e0272046bcf88b2"],["/src/fnndsc-element/fnndsc-team.html","d1c8ce6bdbfc0bd598667318b99e3432"],["/src/lazy-resources.html","1f325d7336c3d888f7f4b58595ab5542"],["/src/meg-element/meg-contact.html","0be7816cee39788bdf76fcc498fb6088"],["/src/meg-element/meg-element.html","961a389dded0e0f1f52b7ea8351279f6"],["/src/meg-element/meg-error404.html","4e958e28a300ac161a3bb2456bb7157b"],["/src/meg-element/meg-labs.html","b87bad0532de8632813aef55f66d92af"],["/src/meg-element/meg-member.html","7a00ad0026a40a4b695a32dd2af35ae1"],["/src/meg-element/meg-overview.html","3545d689059f69f4933fb2a74fa06f5b"],["/src/meg-element/meg-projects.html","86ff00c61cac7e11156559f13bd7d596"],["/src/meg-element/meg-research.html","c19cde18ed939dfc2fdb4a087caccd73"],["/src/meg-element/meg-team.html","dbc8dfa3bb6578337eaa02778d25ce84"],["/src/mri-element/mri-contact.html","f1a0f7691995aacef82d343280677cea"],["/src/mri-element/mri-element.html","fa805a744c71cef261ab85c0cc4d686d"],["/src/mri-element/mri-error404.html","30ed594d331599fdf3e3f873f18fd084"],["/src/mri-element/mri-labs.html","091fff0a289d4ed775b19ca73f2c3acb"],["/src/mri-element/mri-member.html","97e3fe4b7025530ed76402e53fac5915"],["/src/mri-element/mri-overview.html","0622b2703d696716b8e11631c9651fa2"],["/src/mri-element/mri-projects.html","d5a8d3e2127f4bb4307abe19615338c6"],["/src/mri-element/mri-research.html","86bcb5ea280f40455551958ddb888639"],["/src/mri-element/mri-team.html","38938f3604d892220c27a0dd89e83577"],["/src/nirs-element/nirs-contact.html","0059e101412e1048944d5117375a3da6"],["/src/nirs-element/nirs-element.html","1a7ee37801ff423b257db832520c8b79"],["/src/nirs-element/nirs-error404.html","17f14d7e0f7fa7b19a7f29a04324111b"],["/src/nirs-element/nirs-labs.html","271695d4847d9e8bce4e78b55fafe934"],["/src/nirs-element/nirs-member.html","d3563f2396c8ba79a0f178c8a101bc2a"],["/src/nirs-element/nirs-overview.html","bdc8397c1fe66f71c58360d95191c449"],["/src/nirs-element/nirs-projects.html","a0115dc9eb2553d3f74e531bb7086493"],["/src/nirs-element/nirs-research.html","a45051105458748c47f2cc6060b9f789"],["/src/nirs-element/nirs-team.html","97a3020c71daad3f723efc770cf4d190"]];
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





'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0cf8d43b3e207509e8c4f36181dee565",
"/": "0cf8d43b3e207509e8c4f36181dee565",
"version.json": "109e71ee96550279f5b12f25642529ce",
"main.dart.js": "99cf1f080f97dbbd6d52e874fb3c4040",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "d3e8be9819697c196251e6e977053336",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"assets/fonts/MaterialIcons-Regular.otf": "7f34503cbc003b18714ecd36fdfac134",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "98587eadbb299d59f7f32a625ddc90c6",
"assets/AssetManifest.bin": "44dd6d8898c78842c13bd89975233829",
"assets/AssetManifest.json": "792ce1542db3b243fb046df21a452974",
"assets/assets/icons/arrow_right.svg": "4e0c72dde75cd01a996a29f046f297ed",
"assets/assets/icons/heart.svg": "ab024ee91b50b56b86443532170ccf13",
"assets/assets/icons/car.svg": "61b385f5d3b66e4d0261838a0b16f9ed",
"assets/assets/icons/games-icon.svg": "b1faca4e84e037dcf3d8e081abebe03a",
"assets/assets/icons/filters.svg": "70aaae72472c61227bedd26e968cfa92",
"assets/assets/icons/appartment.svg": "833f4c0135b26ae44675380133e37a58",
"assets/assets/icons/gradient_left.svg": "9cc6ecb8e1bca4bad71ec2ae71b12be3",
"assets/assets/icons/profile-icon.svg": "09ee4f2f8b47cc7d1aaa526178b1e9ad",
"assets/assets/icons/accessories.svg": "3ec4f5be60f8f2095bd77c5e0d38a456",
"assets/assets/icons/store-icon.svg": "18af57b219142fd814348f2470620768",
"assets/assets/icons/lightning.svg": "5fb8fcc62e738d53a410fe0100b1649d",
"assets/assets/icons/arrow_left.svg": "fe249eba4203045c0920daf6959b31e6",
"assets/assets/icons/outfit.svg": "98529d9a9b007f2f01c990271843364c",
"assets/assets/icons/home-icon.svg": "f1d59a65b36b19e759a4b2e25d8afe88",
"assets/assets/images/test_image_slider/shop_car_1.jpg": "cbd292642704bee6b305ffea109640d9",
"assets/assets/images/test_image_slider/anna_1.jpg": "b861f455b3e69231640a62d8df8dc1e0",
"assets/assets/images/test_image_slider/anna_0.jpg": "090ab33ab5d59f37ed02912b8087a9f4",
"assets/assets/images/test_image_slider/anna_2.jpg": "51dee62c6c5b26b640742cd1552ad64d",
"assets/assets/images/games/game_2/2_home.png": "60ccbca1ff8fa95d50b1725910e07f02",
"assets/assets/images/games/terrorist_negotiations/main.jpg": "fde4bae254387544d282785cd8418c7c",
"assets/assets/images/games/terrorist_negotiations/main_2.jpg": "e8621e13f0a7712bfcecff3d72547cd5",
"assets/assets/images/games/game_1/anna_home.png": "e0c064552ccacda8c69eaadac12d13ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

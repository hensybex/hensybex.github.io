'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "78f3797c80379cb88d3fd955dc3c0d0d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "c235ba5d005560a018b4e243b37a334e",
"assets/fonts/MaterialIcons-Regular.otf": "737940b8a892be8b899c18671486e0c4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "dab9580b71f317c316390d696bb9bbb8",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/icons/profile.svg": "09ee4f2f8b47cc7d1aaa526178b1e9ad",
"assets/assets/icons/instagram.svg": "2ac218af848d8ba882590d2973f86284",
"assets/assets/icons/logo.svg": "56453ecc908b9cddd1a993facfb1b4c6",
"assets/assets/icons/outfit.svg": "98529d9a9b007f2f01c990271843364c",
"assets/assets/icons/filters.svg": "70aaae72472c61227bedd26e968cfa92",
"assets/assets/icons/save.svg": "eca00d538c83672867a1952255c9d26d",
"assets/assets/icons/games.svg": "b1faca4e84e037dcf3d8e081abebe03a",
"assets/assets/icons/gradient_cross.svg": "5ba4b7f941d2c3d4ccf899b8f1cc9af1",
"assets/assets/icons/arrow_right.svg": "4e0c72dde75cd01a996a29f046f297ed",
"assets/assets/icons/twitter.svg": "c5afc826b4c1164691f2fa8265f7921b",
"assets/assets/icons/history.svg": "b53e4c016714ef3296a970f06beb0e12",
"assets/assets/icons/gradient_heart.svg": "bd74d24219bf047c6c1106a7ee65c577",
"assets/assets/icons/faq.svg": "dcaab2495b90f4964506972159beced8",
"assets/assets/icons/center_button.svg": "127d119c021e1fd9a36dab0cf2c67ee0",
"assets/assets/icons/car.svg": "61b385f5d3b66e4d0261838a0b16f9ed",
"assets/assets/icons/home.svg": "f1d59a65b36b19e759a4b2e25d8afe88",
"assets/assets/icons/invisibility.svg": "063afdc78d7236c8e23b141a0b330c1d",
"assets/assets/icons/gradient_right.svg": "1f9ca4134dfee21ac523087697eeb5d2",
"assets/assets/icons/privacy.svg": "8c3041431545cd771102bbac4c3caaba",
"assets/assets/icons/scenario_deletion.jpg": "9d191df10557b6528ef509160290db0f",
"assets/assets/icons/facebook.svg": "de33fa5eba5caccdb86f37691678c54f",
"assets/assets/icons/store.svg": "18af57b219142fd814348f2470620768",
"assets/assets/icons/vk.svg": "1c07a6d813c74f1251b47d510e3b7340",
"assets/assets/icons/visibility.svg": "aa6f548ef7b97353b02b47521517ac0c",
"assets/assets/icons/accessories.svg": "3ec4f5be60f8f2095bd77c5e0d38a456",
"assets/assets/icons/settings.svg": "9bb0539ac2788f38f5bdf109ad100fff",
"assets/assets/icons/eye.svg": "66499756d9b45c9fe53a3325dbd2b5a7",
"assets/assets/icons/file.svg": "11171cadedc123fed63a1e498450745c",
"assets/assets/icons/gradient_left.svg": "9cc6ecb8e1bca4bad71ec2ae71b12be3",
"assets/assets/icons/trash.svg": "89749a8cd6a16d26f965683a58de171d",
"assets/assets/icons/logo_old.svg": "87e8f135a7dfb264cbaf45c0dcdaaa0a",
"assets/assets/icons/arrow_left.svg": "fe249eba4203045c0920daf6959b31e6",
"assets/assets/icons/heart.svg": "ab024ee91b50b56b86443532170ccf13",
"assets/assets/icons/support.svg": "bb7f1e247c5ec3a58b1fb1bdee8110dd",
"assets/assets/icons/lightning.svg": "5fb8fcc62e738d53a410fe0100b1649d",
"assets/assets/icons/appartment.svg": "833f4c0135b26ae44675380133e37a58",
"assets/assets/icons/edit.svg": "92fc5d00172553df6b0fb9e5321f6b06",
"assets/assets/images/defailt_profile.jpg": "83417a87240f1a98fc8dd0111b37bc31",
"assets/assets/images/app/profile_background.png": "08bbcff2ecb9d957bc393b7e2411e8ac",
"assets/assets/images/app/create_background.jpg": "41e5d54dcb6301f47816e818cc413525",
"assets/assets/images/app/auth_background.jpeg": "3190ec1824a9450066e59c7e7b85d5c6",
"assets/assets/images/games/terrorist_negotiations/main_2.jpg": "e8621e13f0a7712bfcecff3d72547cd5",
"assets/assets/images/games/terrorist_negotiations/main.jpg": "fde4bae254387544d282785cd8418c7c",
"assets/assets/images/games/game_1/anna_home.png": "e0c064552ccacda8c69eaadac12d13ea",
"assets/assets/images/games/game_2/2_home.png": "60ccbca1ff8fa95d50b1725910e07f02",
"assets/assets/images/test_image_slider/anna_0.jpg": "090ab33ab5d59f37ed02912b8087a9f4",
"assets/assets/images/test_image_slider/anna_2.jpg": "51dee62c6c5b26b640742cd1552ad64d",
"assets/assets/images/test_image_slider/anna_1.jpg": "b861f455b3e69231640a62d8df8dc1e0",
"assets/assets/images/test_image_slider/shop_car_1.jpg": "cbd292642704bee6b305ffea109640d9",
"assets/FontManifest.json": "b98a1b798079291cc70840325ce20d49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "265cc383df4673a612d94e7aa1335f3d",
"assets/AssetManifest.bin": "39ae14b3d8fcd579c4d8a240ac7b46e4",
"manifest.json": "d3e8be9819697c196251e6e977053336",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "e7712a53621a4988adb08c9709fb4a70",
"/": "e7712a53621a4988adb08c9709fb4a70"};
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

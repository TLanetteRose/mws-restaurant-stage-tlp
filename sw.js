let staticCacheName = 'restaurant-static-v1';


//Listen for event fired when sw installed
self.addEventListener('install', function(e) {
	e.waitUntil(
		//Cache an array of file names for later use
		caches.open('staticCacheName').then(function(cache) {
			return cache.addAll([
					'./',
					'./index.html',
					'./restaurant.html',
					'./css/styles.css',
					'./js/dbhelper.js', 
					'./js/main.js', 
					'./js/restaurant_info.js',
					//'./js/sw_register.js',
					'./img/1.jpg',
					'./img/2.jpg',
					'./img/3.jpg',
					'./img/4.jpg',
					'./img/5.jpg',
					'./img/6.jpg',
					'./img/7.jpg',
					'./img/8.jpg',
					'./img/9.jpg',
					'./img/10.jpg'
			]);
		})
	);
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			if (response) {
				console.log('Found', e.request, ' in cache');
				return response;
			}
			else {
				console.log('Could not find ', e.request, ' in cache, FETCHING!');
				return fetch(e.request)
				.then(function(response) {
					const clonedResponse = response.clone();
					caches.open('staticCacheName').then(function(cache) {
						cache.put(e.request, clonedResponse);
					})
					return response;
				})
				.catch(function(err) {
					console.error(err);
				});
			}
		})
	);
});
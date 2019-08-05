//Service Worker 
if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js')
		.then(function(registration){
			console.log('Service Worker registration completed with scope: ', registration);
		}, 
		function(error){
			console.log('Service Worker registration failed', error);
		});
} else {
	console.log('Service Workers not supported');
}
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
  // Você pode personalizar como cachear dados aqui se quiser
});

// Obtiene los elementos del DOM
const fileInput = document.getElementById('fileInput');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const loadingMsg = document.getElementById('loadingMsg');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volUpBtn = document.getElementById('volUpBtn');
const volDownBtn = document.getElementById('volDownBtn');

// Agrega un controlador de eventos al input de tipo file
fileInput.addEventListener('change', function() {
  // Verifica si se ha seleccionado un archivo de video
  if (this.files[0].type.startsWith('video/')) {
    // Muestra el mensaje de carga y oculta el video
    loadingMsg.style.display = 'block';
    videoPlayer.style.display = 'none';
    // Carga el archivo de video en el elemento video
    const fileUrl = URL.createObjectURL(this.files[0]);
    videoSource.setAttribute('src', fileUrl);
    // Limpia el estado anterior del video y lo carga de nuevo
    videoPlayer.load();
    // Oculta el mensaje de carga y muestra el video
    videoPlayer.addEventListener('loadeddata', function() {
      loadingMsg.style.display = 'none';
      videoPlayer.style.display = 'block';
    });
  } else {
    alert('Seleccione un archivo de video.');
  }
});

// Agrega controladores de eventos a los botones de la botonera
playBtn.addEventListener('click', function() {
  videoPlayer.play();
});

pauseBtn.addEventListener('click', function() {
  videoPlayer.pause();
});

volUpBtn.addEventListener('click', function() {
  if (videoPlayer.volume < 1) {
    videoPlayer.volume += 0.1;
  }
});

volDownBtn.addEventListener('click', function() {
  if (videoPlayer.volume > 0) {
    videoPlayer.volume -= 0.1;
  }
});

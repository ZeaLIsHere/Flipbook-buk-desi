document.addEventListener('keydown', function(event) {
  if (event.code === '') {
      event.preventDefault();

      const video = document.getElementById('video2');
      const isFullscreen = document.fullscreenElement === video;

      if (isFullscreen) {
          if (!video.paused) {
              video.pause();
              document.exitFullscreen();
          }
      } else {
          if (video.paused) {
              video.play();
              video.requestFullscreen(); 
          } else {
              video.pause();
          }c
      }
  }
});
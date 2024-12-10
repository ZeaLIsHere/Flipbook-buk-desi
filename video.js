document.addEventListener('keydown', function(event) {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    if (event.code === 'Space') { // Control video1 with Space
        event.preventDefault();

        const isFullscreen = document.fullscreenElement === video1;
        if (isFullscreen) {
            if (!video1.paused) {
                video1.pause();
                document.exitFullscreen();
            }
        } else {
            if (video1.paused) {
                video1.play();
                video1.requestFullscreen();
            } else {
                video1.pause();
            }
        }
    }

    if (event.code === 'KeyP') { // Control video2 with "P"
        event.preventDefault();

        const isFullscreen = document.fullscreenElement === video2;
        if (isFullscreen) {
            if (!video2.paused) {
                video2.pause();
                document.exitFullscreen();
            }
        } else {
            if (video2.paused) {
                video2.play();
                video2.requestFullscreen();
            } else {
                video2.pause();
            }
        }
    }
});
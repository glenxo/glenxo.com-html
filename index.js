var audio = document.getElementById('bg-music');

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function muteUnmute() {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}
const audioElements = document.querySelectorAll('audio');
const playlist = [];
let currentSongIndex = 0;

// Extract the source URLs from the audio elements
audioElements.forEach(audio => {
    const sourceElement = audio.querySelector('source');
    if (sourceElement) {
        playlist.push(sourceElement.src);
    }
});

const playNextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    const nextAudio = audioElements[currentSongIndex];

    // Pause all audio elements
    audioElements.forEach(audio => audio.pause());

    // Play the next audio
    nextAudio.play();
};

audioElements.forEach(audio => {
    audio.addEventListener('ended', playNextSong);
});

// Start playing the first song
if (playlist.length > 0) {
    audioElements[currentSongIndex].play();
}

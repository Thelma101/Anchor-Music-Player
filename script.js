const image = document.querySelector('img');
const name = document.querySelector('title');
const artist = document.getElementById('artist');
const albumCover = document.getElementById('albumTitle');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name:'River',
        displayName: 'Scream: Music From Season 2',
        artist:'Bishop Briggs',
        albumCover: 'bishopBriggs.jpeg'
    },
    {
        name:'City Boy',
        displayName: 'I Told Them...',
        artist:'Burna Boy',
        albumCover: 'burna.jpg'
    },
    {
        name:'Soso',
        displayName: 'Boy Alone Album',
        artist:'Omah Lay',
        albumCover: 'soso.jpg'
    },
    {
        name:'Bam Bam',
        displayName: 'Familia',
        artist:'Camila Cabello',
        albumCover: 'bambam.jpeg'
    },
    {
        name:'Agora Hills',
        displayName: 'Scarlet',
        artist:'Doja Cat',
        albumCover: 'agora.jpg'
    }
];
 
//Is playing
let isPlaying = false;

// Play
function playSong(){
    isPlaying=true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause');
    music.play();
}

//Pause
function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'pause');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))

// Update DOM
function loadSong(song) {
    title.textContent = song.name;
    albumCover.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.albumCover}`;
}

//Current Song
let songIndex = 0;

//Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0 ) {
        songIndex = songs.length -1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

//On load select first song
    loadSong(songs[songIndex]);

//Event Listners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Play & Pause ----------------------------------- //



// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

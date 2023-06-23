const playBtn = document.querySelector('#play-btn');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');


let songs = [
    {
        id:1,
        name:'song1'
    },
    {
        id:2,
        name:'song2'
    },
    {
        id:3,
        name:'song3'
    },
    {
        id:4,
        name:'song4'
    }
]


const audio = new Audio('./assets/song1.mp3')

// show shongs in ul
for(let song of songs){
    const li = document.createElement('li')
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    li.classList.add('song-list');
    songList.append(li);
}


// play btn 

audio.addEventListener('click' , function(){
    
})

// audio.addEventListener('change' , function(){

// })













var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
const button_play = document.getElementById('play');
const button_pause = document.getElementById('stop');
const range_bar = document.getElementById('time');
const queryParamsString = window.location.search.substr(1);
const queryParams = queryParamsString.split('&').reduce((accumulator, singleQueryParam) => {
    const [key, value] = singleQueryParam.split('=');
    accumulator[key] = decodeURIComponent(value);
    return accumulator;
}, {})
const data = require('../../../backend/storydata.js');

const story = new Audio(`../../static/src/golpo1.mp3`);

for (let x of data) {
    if (x.id === queryParams.storyid) {
        story.src = `../../static/src/${x.title}.mp3`;
        document.getElementById('song_name').innerText = `${x.title}`,
        document.getElementById('image_info').src = `${x.image}`
    }
}

button_play.addEventListener('click', () => {
    if (story.paused || story.currentTime <= 0) {
        story.play()
    }
})

button_pause.addEventListener('click', () => {
    if (story.play) {
        story.pause()
    }
})

story.addEventListener('timeupdate', () => {
    let range_audio = parseInt((story.currentTime / story.duration) * 100);
    range_bar.value = range_audio;
})

range_bar.addEventListener('change', () => {
    story.currentTime = range_bar.value * story.duration / 100;
})
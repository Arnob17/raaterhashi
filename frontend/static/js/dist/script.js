(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = [
    {
        title: 'amar sathe hoya bhoot er kahini',
        id: 'xY12HjU',
        teller: 'Muntasir',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHH7GY3Jz_83T0nVN7zeEqKdH9NzCmEsUA5SfUAbFTkE_GaPffVBJoT30x4VWDz7RH5w&usqp=CAU'
    },
    {
        
        title: 'Aamar friend er sathe ghota bhoot er golpo',
        id: 'YgHkNb11',
        teller: 'Muntasir',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcFeVoN1dx-cQ98n6D8JRrEHncC9f3sNGiQ&usqp=CAU'
    }
]

module.exports = data;
},{}],2:[function(require,module,exports){
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
},{"../../../backend/storydata.js":1}]},{},[2]);

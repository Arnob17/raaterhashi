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
const story = require('../../../backend/storydata.js');

const queryParamsString = window.location.search.substr(1);

const queryParams = queryParamsString.split('&').reduce((accumulator, singleQueryParam) => {
    const [key, value] = singleQueryParam.split('=');
    accumulator[key] = decodeURIComponent(value);
    return accumulator;
}, {})

let stories = story;

for (let x of stories) {
    let el = document.createElement('li');

    el.innerHTML = `<span class="title"><a href="http://localhost:3000/index?storyid=${x.id}">${x.title}</a></span>
    <span class="teller">${x.teller}</span>`

    document.getElementById('posts').appendChild(el);
}
},{"../../../backend/storydata.js":1}]},{},[2]);

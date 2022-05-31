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
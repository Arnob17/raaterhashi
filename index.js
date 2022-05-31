const express = require('express');
const web = new express();
const r = require('./backend/getreq.js');
const fReq = new r()
const path = require('path');

let pages = [
    {
        file: path.resolve(__dirname, 'frontend/views', 'index.html'),
        name: 'index'
    }
];

web.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

web.get('/', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, 'frontend/views', 'home.html'))
})

function route (file, name) {
    web.get(`/${name}`, (req, res) => {

        res.sendFile(file)
    
    })
}

route(pages[0].file, pages[0].name)

web.listen(3000, () => {
    console.log('http://localhost::3000')
})
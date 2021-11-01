const path = require('path');
const fs =  require('fs');
const request = require('request');

let chirpsPath = path.join(__dirname, '../chirps.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {


    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(chirpsPath,item.data.title + '\n');
    });


});
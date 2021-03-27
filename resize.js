'use strict';
const Jimp = require('jimp');
const fs = require('fs');

const path = "./src/imgs/";


fs.readdir(path, (err, avatares) => {
    avatares.forEach(avatar => {
        let pathAvatar = path + avatar;
        Jimp.read(pathAvatar)
        .then(image => {
            return image
                .resize(250, 250) // resize
                .quality(95) // set image quality
                .write(pathAvatar); // save
        })
        .catch(err => {
            console.error(err);
        });
    });
})
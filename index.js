const {
    config,
    log,
    id
} = require("./utils/utils.js");
const printStars = require("./utils/printStars");

console.log(answer);
console.log(config.port);
console.log(log.port);

// Buffer
const buffer = Buffer.from(config.string);
console.log("String : ", config.string, config.string.length);
console.log("Buffer : ", buffer, buffer.length);

console.log("module : ", module);

// JSON
const configjson = require("./utils/config.json") // kada uvezemo JSON 
console.log("configJson : ", configjson);

// only export id 
console.log("id : ", id);

// arguments
//console.log("arguments : ",arguments);

// Stars
printStars(3, "asd");
printStars.zvezde(5, "Hi");

// Cache
//console.log("Require cache : \n", require.cache);

// example Double
const add = (a, b) => a + b;
const double = a => add(a, a);
const printDouble = a => {
    const output = double(a);
    console.log("DOUBLE : ", output);
}
printDouble(8);

// CAll BACK
const startTime = Date.now();
const functName = (a, b, time) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let r = a + b
            resolve(r);
        }, time);
    });
}

(async function s() {
    const result = await functName(4, 4, 3000);
    console.log(result); // --> 'done!';
})()

async function m() {
    const f = await functName(5, 5, 5000);
    return f;
}
m().then(response => {
    console.log(response);
})


let fn = functName(3, 3, 1500)
    .then(response => {
        console.log(response);
    });


// async await
const fetch = require('node-fetch-npm');


async function showAvatar() {

    try {
        let user = {
            name: "nemanjamil"
        }
        let response = await fetch(`https://api.github.com/users/${user.name}`);
        let githubUser = await response.json();
        console.log("RESPONSE : \n\n", githubUser);

        //await new Promise((resolve, reject) =>  setTimeout(resolve,2000));
        const odgovor = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("resolve")
            }, 3000)
        })
        console.log("RESPONSE : ", githubUser.login, odgovor);
    } catch (errormoj) {
        throw new Error(errormoj.message)
    }
}

showAvatar();


// FILE
const fs = require("fs");
const readF = (file, cb) => {
    fs.readFile(file, function (err, data) {
        if (err) {
         return cb(err);
        }
        const lines = data.toString().trim().split('\n');
        console.log("lines : ",lines);
        cb(null,lines);
    });

}

readF("./files/file.txt",  (err, data) => {
    if (err) {
        console.log("USAO U ERROR");
        console.log(err);
        throw err;
    }
    console.log("dataFile : ", data);
    const list = data.map(Number)
    console.log(list);
    const oddNumbers = list.filter(number => number % 2 === 1);
    console.log("oddNumbers : ", oddNumbers);

});


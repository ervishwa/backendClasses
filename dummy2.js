// const {add,subtract} = require("./index");

// console.log(add(2,3));
// console.log(subtract(5,2));



// const akash = require("./index");
// console.log(akash.subtract(2,3));

//  const add = require("./index");


//  console.log(global.exports(2,3));

// console.log(add(2,3));


//path module


// const path = require("path");

// const ans = path.parse("index.js");

// console.log(ans);


//os module

//const os = require("os");

//ram

//console.log((os.totalmem())/1024/1024);  
//it gives in bytes..


//console.log(os.freemem());

//console.log(os.platform());

//console.log(os.arch());

//console.log(os.networkInterfaces());


//fs module


const fs = require("fs");


//read 
//sync
//const files = fs.readdirSync("./");

//async
//const files = fs.readdir("./");

// fs.readdir("./",(err,files)=>{
//     if(err) console.log(err);
//     console.log(files);
// })

//console.log(files);

//read 

//sync
//const file = fs.readFileSync("./index.js","utf-8");
//console.log(file);


//async

// fs.readFile("./index.js","utf-8",(err,file)=>{
//     if(err) console.log(err);
//     console.log(file);
// })








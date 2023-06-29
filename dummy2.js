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


//const fs = require("fs");


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


//write

//sync

//const val = "hai i am vishnu thakur."

// const val = {
//     name : "king",
//     age : 28,
//     country : "america",
// }

//fs.writeFileSync("vishnu.json",JSON.stringify(val));

//appendFile

//async
// fs.appendFile("vishnu.md","hai i am genuis",(err)=>{
//     if(err) console.log(err);
//     console.log("file saved !");
// })

//delete

// fs.unlink("vishnu.md",(err)=>{
//     if(err) console.log(err);
//     console.log("deleted succfully !");
// })

//rename

// fs.rename("vishnu.json","vishnu.md",(err)=>{
//     if(err)console.log(err);
//     console.log("file rename successfully!");
// })


//Event Module


// const EventEmitter = require("events");

// //class 

// const emitter = new EventEmitter();


// //register
// // document.addEventListener("click",()=>{

// // })



// //emitter.addListener();

// //register the event
// emitter.on("khansi",(name)=>{
//     console.log("versa khansh rahi ha !",name);
// })


// //trigger

// emitter.emit("khansi","kamble");












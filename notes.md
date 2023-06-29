tcp - transimission control protocol

udp 
ftp
http 
https
smpts

pipeline

secure and time taking.


udp(user datagram protocol) (games..)



cdn(content delivering network)


peer to peer network...
yify 
vpn


mvc archetecture..

-----------------------------


node js 

its a environment to run js.
its not language..not a framework.

2009 - js runs only on browser

ryan phd.. -> v8 + c++ packages => node enironment.


js -> react + node => full stack


js -> single threaded lang..synch 

node python

python 5000req/s   
node 40000req/s


js -> web Api's
node -> thread pool

in reality node js 7 threads...
1 main thread service workers..


prefer node
i/o -> operation based


cpu intensive -> java (multi threaded lang.)

window js 
global in node.

node framework ->
express,
restify,
fastify
next js - node framework..

next js - frontend 

library and framework

collection of library framework..


IIFE(immideatly invoked function expression)


(
    function(exports,require,module,__dirname,__filename){
        -----
        ----
        ---
        ---
        --
    }
)()


module --- (library)
module is nothing but js object which having some properties..
set functions..


//defaul export 
//name export 


synatx of named export

export  -> 

module.exports.<functionname>  = <functionname>

import ->

const {<functionname>} = require("<file name>")

syntax -

//default export

module.exports = <fnctionName>;

//import 

const <name> = require("<file name>");


---------------------------------------

exporting more the one function named export 

module.exports = {
    add,
    subtract
}


question - can we export default as well as name from a same file?


node -> 

node js runs single threaded , non - blocking async programmming , which is very 
efficient.

Modules

Node Inbuilt Modules 

1-> path modules

2-> os modules

(operating system) -> basically it connects hardware to software..

//path module


// const path = require("path");

// const ans = path.parse("index.js");

// console.log(ans);


//os module

//const os = require("os");

//ram

//methods..

//console.log((os.totalmem())/1024/1024);  
//it gives in bytes..


//console.log(os.freemem());

//console.log(os.platform());

//console.log(os.arch());

//console.log(os.networkInterfaces());


3- fs(file system)
4- event

//fs module

read file 
create file
update file
delete file

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


remember - don't use sync use alws async...


//read 

const file = fs.readFileSync("./index.js");

console.log(file);

//you will get the answer in buffer format.

---------------------------

write fs 

fs.wrtieFileSync

purana data ko replace kar dega and if file nhi hoga then new file create karega.

append file

//async
fs.appendFile("vishnu.md","hai i am genuis",(err)=>{
    if(err) console.log(err);
    console.log("file saved !");
})
purana data ma add kar dega ..and if file nhi hoga then new file create karega.


update -> append & write


delete

//delete

fs.unlink("vishnu.md",(err)=>{
    if(err) console.log(err);
    console.log("deleted succfully !");
})

//will delete the file..


//rename

//rename

fs.rename("vishnu.json","vishnu.md",(err)=>{
    if(err)console.log(err);
    console.log("file rename successfully!");
})


Next Events module

events - user driven.

//Event Module


const EventEmitter = require("events");

//class 

const emitter = new EventEmitter();


//register
// document.addEventListener("click",()=>{

// })



//emitter.addListener();

//register the event
emitter.on("khansi",(name)=>{
    console.log("versa khansh rahi ha !",name);
})


//trigger

emitter.emit("khansi","kamble");

Note - it will not followe any hoisting and all.


HTTP Module use to create server on my comp...






















//creating our own server

const http = require("http");


//create server method call.
const server = http.createServer((req,res)=>{
    res.write("hai welcome to my server!");
    res.end();
});


//listiner

// server.on("connection",()=>{
//     console.log("new connection triggered! ")
// })


//trigger

server.listen(3000,()=>{
    console.log("server is running on 3000 !")
});

//go and listen that server if someone hit that then react on it.

//console.log("server is listing to port 3000 !");


//! Promise


const ans = new Promise((res,rej)=>{
    setTimeout(()=>{
     res("Try again later");
    },3000)
})


ans.then((data)=>{
 console.log("i have  done my work");
 return 10;
}).then((data)=>{
    console.log(data);
})
.catch((data)=>{
console.log(data);
}).finally(()=>{
    console.log("i m the king !")
})


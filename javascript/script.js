//! Promise


// const ans = new Promise((res,rej)=>{
//     setTimeout(()=>{
//      res("Try again later");
//     },3000)
// })


// ans.then((data)=>{
//  console.log("i have  done my work");
//  return 10;
// }).then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
// console.log(data);
// }).finally(()=>{
//     console.log("i m the king !")
// })


//! create a promise with resolve immediately giving output of 200 ?

//? Solution -> 

//const ans = Promise.resolve(200);


// const myfunc = new Promise((res,rej) => {
//     res(200);
// });
// myfunc
//   .then((data) => {
//     console.log(data);
//   })


// const myfunc = new Promise((res, rej) => {
//     res(200);
// });


// myfunc.then((data)={
//     console.log(data);
// })

//  y = 1;

// function foo() {
//     let x = (y = 0);
//     x = 0;

//     x++;
//     x==1;

//     y++;
//     y=1;

//     return x;
//   }
//                1   , undefined , number
//   console.log(foo(), typeof x, typeof y);




// let x = (y=0);

// let x = y;


//! create a arrays of promise and print "all done" after all the resolved ?


// [p1,p2,p3,p4]

// console.log("all done");


// const arr = [Promise.resolve(200),Promise.resolve(300),Promise.resolve(400)];

// console.log("all done");



// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//     res(200);
//     },3000)
// })

// const arr = [p1,Promise.resolve(300),Promise.resolve(400)];

 //console.log("all done");

// const ans = Promise.all(arr);

// ans.then((data)=>{
//     console.log(data);
//     console.log("all done");
// })

//data => [200,300,400]


//!*****

// function sum(a,b){
//     setTimeout(()=>{
//      console.log("something is running ......")
//     },5000)

//     return a+b;
// }

// const result = sum(20,30);

// console.log(result);

// const arr = [1,2,3,4,5];

// for(let i = 0 ; i< arr.length ; i++){
//  console.log(arr[i]);
// }


// async function sum(a,b){
//     return a+b;

     // return new Promise((res,rej)=>{
     //     res(a+b);
     // })
// }

// sum().then((data)=>console.log(data));



// async function sum(a,b){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//            res(a+b);
//         },3000)
//     })
// }

// const ans = await sum(3,4);

// for(let i = 0 ; i < ans ; i++){
//     console.log(i);
// }

// async function sum(a,b){
//     setTimeout(()=>{
//      console.log("sdbhsbds");
//     },3000)

//     return a+b;
// }

// const ans = await sum(3,4);







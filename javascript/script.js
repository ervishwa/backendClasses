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

//api

//const url = "https://restcountries.com/v3.1/all";

//fetch

//fetch(url).then((data)=> data.json()).then((res)=> console.log(res[0].name.common));

// async function getdata(){
//      const data = await axios.get(url);
//      console.log(data);
// }

// getdata();

//call bind apply

// const a = {
//      name : "vishnu",
//      age : 24,
//      getname : function(place="bihar",country="India"){
//           console.log(`${this.name} is ${this.age} old ! he lives in ${place} which is in ${country}`)
//      }
// }

// a.getname();

// const b = {
//      name : "akash",
//      age : 34
// }

// i want b should borrow the getname method of a ?

//a.getname.call(b,"indore","India");

//a.getname.apply(b,["indore","India"]);

// const ans = a.getname.bind(b);

// ans("indore","India");

// const a = {
//      name : "vishnu",
//      age : 24,
//      place : "delhi",
//      walk : function(){
//           console.log(this.name + "can walk !");
//      }
// }

// const jsonFromat = JSON.stringify(a);

// console.log(JSON.parse(jsonFromat));

// {
//      "name":"vishnu",
//      "age":24
//     "place":"delhi"
// }

//closure

//let a = 1;

//i want to make a method that will inc the a by 1.? [1 function]

// function incByAkash(){
//     return a++;
// }

//  console.log(incByAkash()) ;  1
//  console.log(incByAkash()) ;  2

//  console.log(incByAkash());
// function incbyYash(){
//      return a++;
// }

// function a(){
//  let a = 1;

//  return function b(){  //store a address ..
//      return a++;
//  }
// }

// const ans = a();

// console.log(ans());
// console.log(ans());
// console.log(ans());

// const ans2 = a();
// console.log(ans2());  //4 //1 //4

// const ans = (function a(){
// let a = 1;
// return function b(){
//      return a=a+1;
// }
// })();
//console.log(ans);
//  console.log(ans());
// console.log(ans());
// console.log(ans());

// ans();

//console.log(ans());

//function

// function  a(){
//      return 2;
// }

// console.log(typeof a);

// function (){
//      return 2;
//  }

//  console.log(a());

// function sum(a,b){
//   return a+b;
// }

// console.log(sum(2,3));

//it's not a good idea..

//FUNCTION CONSTRUCTOR..

//const myfunction =  new Function("a","b","return a+b");

// console.log(myfunction(2,3));

//console.log(typeof myfunction);

//self invoking function  (iife) (imigeatly invoked function expression)

//syntax function expression slef invoking function..

// const a = function(){
//      console.log("haooo");
// }();

// (
//      function a(){
//           console.log("haiai");
//      }
// )();

// function a(){
//      console.log("sjdnjsd");
// }();

// function a(a,b){
//      console.log(arguments[6]);
// }

// a(2,3,4,5,6,7,8,9);

// [2,3,4,5,6,7,8,9].length == 8

// let sum = 0;

// function a(){

//  for(let i = 0 ; i < arguments.length ; i++){
//      sum += arguments[i];
//  }
//return sum;
// }
// a(2,3,4,5,6,7,8,9);

// console.log(sum);

//-------------------------------

//! make a function that will accept unlimted argument and return maximum number from them ?

// let ans=0;
// function sum(...arg){
//     for (let i=0;i<arg.length;i++){
//         ans +=arg[i];
//     }
// }
// sum(2,3,4,5,5);
// console.log(ans);

//-----------
// let sum = 0;
//  function a(){
//   for(let i = 0 ; i < arguments.length ; i++){
//      sum += arguments[i];
//   }
//   return sum;
//  }
//  a(4,5,6,8,9);
// console.log(sum);

// //----------

// function nandini(){
//   let sum = 0;
//     for(let i=0;i<arguments.length;i++){
//         sum += arguments[i];
//     }
//    return sum;
// }
// const ans = nandini(2,3,5,6,8,9);
// console.log(ans);

// let ans=0;
// function sum(...arg){
//     for (let i=0;i<arg.length;i++){
//         ans = Math.max(ans,arg[i]);
//     }
// }
// sum(2,3,4,5,5,15,23,15,88,79);
// console.log(ans);

//------------

// let max = -Infinity;                 
// function a(...arg){
//   for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i]>max){
//       max = arg[i];
//     }
//   }
//  }
//  a(5,6,7,8,9,2,90);  
//  console.log(max);

//------------

// let sum = 0
// function nandini(){
//     for(let i=0;i<arguments.length;i++){
       
//     }
//    return max;
// }
// nandini(2,3,5,6,8,9);
// console.log(sum);

//-------------


// function a(){
//   console.log("hsbdbsdb");
// }

// const ans = a.toString();

// console.log(ans);

//! -------*********

// 1 , 2 , 3 

// const ans = Math.max(1,2,3);

// console.log(ans);

//const a = [1,2,3];

//const ans = Math.max(...a);  => Math.max(1,2,3)
//loop
//console.log(ans);

// const ans = Math.max.apply(0,a);
// console.log(ans);











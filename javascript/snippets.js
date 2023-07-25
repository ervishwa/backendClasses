//! 1
// var b = 1;
// function outer(){
//     var b = 2
//     function inner(){
//     b++;
//     console.log(b); 
//     var b = 3;
//     console.log(b);
//     }

//     inner();
// }
// outer();

//!--------

// 3 4 , 3 6 , 3 3 
// 3 3 ,   nan , 3

//2 , //2  //undefined 

//3 //nan //

//console.log(Number(undefined));

//! 2

// var length = 10;

// function fn(){
//     console.log(this.length);
// }

// var obj = {
//     length : 5,
//     method : function(fn){
//         fn();
//         arguments[0]();
        
//     }
// };

// obj.method(fn,1);

//!3

console.log([1, 2] + [3, 4]);



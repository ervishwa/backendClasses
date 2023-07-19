//! map filter reduce


//! map 




// const result = arr.map((item, index) => {
//     return item * 2;
// });

// console.log(result);



// Array.prototype.akashmap = function(callback){
//     const newarr= [];

//     for(let i = 0 ; i < this.length ; i++){
//           newarr.push(callback(this[i],i,this));         
// }

//     return newarr;
// }

// const ans = arr.akashmap((num)=> num+2);

// console.log(ans);


//! polyfills of filter..

// const ans = arr.filter((curr)=>{
//     if(curr>5){
//         return curr;
//     }
// })

// console.log(ans);


// Array.prototype.akashfilter = function(callback) {
//     const newarr = [];
    
//     for(let i = 0 ; i < this.length ; i++){
//       if(callback(this[i])){
//         newarr.push(this[i]);
//       }
//     }

//     return newarr;
// }


// const ans = arr.akashfilter((num)=> num>5);

// console.log(ans);



//!reduce


const arr = [1,2,3,4,5,6,7,8,9,10,11];


// const ans = arr.reduce((acc,curr)=>{
//     return acc += curr;
// })


// console.log(ans);



//! versareduce
                                                 //
                                                 //10
Array.prototype.versareduce = function(callback,intialvalue){
    let acc = intialvalue ;

    for(let i = 0; i < this.length; i++){
        if(acc != undefined){
          acc += this[i];
        }else{
            acc = this[i];
        }

    }

    return acc;

}



// function king(a,b){
//     console.log(b);
//     return a+b;
// }

// console.log(king(2));


const ans = arr.versareduce((acc,curr)=>acc+=curr,100);

console.log(ans);

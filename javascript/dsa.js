//! find intersection between them.
/**
 * [1,2,3,4,5,6,7,8,9] [3,5,12,13,14,15,16,17,18]
 * 
 * intersection between => [3,5] 
 */

// const a = [1,2,3,4,5,6,7,8,9];
// const b = [3,5,12,13,14,15,16,17,18];


// function intersection(a, b) {
//     const ans = [];

//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i])) {
//             ans.push(a[i]);
//         }
//     }

//     return ans;
    
    //return a.filter((x) =>{ return  b.includes(x)) };
//}

// const arr = [3];

//console.log(intersection(a,b));


//! Hint => make a object with smalled array.. then loop over the bigger array and chq the value is present in objects
//! or  not.


//const a = [1,2,3,4,5,6,7] ;

//! i want a ans arry which have value greate then 3 from the elements of array a ?
//* [4,5,6,7] using for each loop.


// Write a JavaScript function to get the last element of an array. 
// Passing the parameter 'n' will return the last 'n' elements of the array. 
// Test Data :                 i
// console.log(last([7, 9, 0, -2])n=1);   -2 4-1=3
// console.log(last([7, 9, 0, -2],3)); 4-3 = 1
// console.log(last([7, 9, 0, -2],6)); 4-6 = -2
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]


// function getLastElement(a,n=1){
//  const ans = [];
//  const l = a.length;  //4
 

//  for(let i = l-n; i < l; i++){
//  ans.push(a[i]);
// }
// return ans;
// }

// console.log(getLastElement([7,9, 0, -2]));



//! Write a JavaScript program to compute the sum and product of an array of integers ?


//const a = [1, 2, 3, 4, 5, 6];

// let array = [1, 2, 3, 4, 5, 6],
//     s = 0,
//     p = 1,
//     i;
// for (i = 0; i < array.length; i++) 
//    {
//     s += array[i];
//     p *= array[i];
//     }
// console.log('Sum : '+s + ' Product :  ' +p);



// const arr=[1,2,3,4,5,6];
// let ansSum = arr.reduce((acc,ele)=>{
//     return  sum +=ele;
// })

// console.log(ansSum);

// let product = arr.reduce((acc,ele)=>{
//     return ans *=ele;
// });

// console.log(product);


// let a = [1,2,3,4,5,6];
//    const ans = a.reduce((acc,)=>{return ele+=arr});

  // let a = [1,2,3,4,5,6];
   //const ans = a.reduce((ele,arr)=>{return ele*=arr; })
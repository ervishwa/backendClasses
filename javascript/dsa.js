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


   // const inp = [
//      {name: "sonu"},
//      {name: "sameer"},
//      {name: "rahul"},
//      {name: "pinki"},
//      {name: "basheer"}
//    ];

// const inp = [
//      {name: "rahul"},
//      {name: "sameer"},
//      {name: "sonu"},
//      {name: "pinki"},
//      {name: "basheer"}
//    ];

 //basheer pinki rahul sameer sonu


// const ans = inp.sort((a,b)=>{
//      return a.name.localeCompare(b.name);
      //return b.name.length - a.name.length;
// })

// console.log(ans);



//const inp = [2,3,4,1,9,6,5,11];

// const inp = [2,3,4,1,9,6,5,11];
// let ans =inp.sort((a,b)=>{
//        return a-b;
// })
// console.log(ans);

//const inp1 = ["apple","king","mango","akash","yash","vishwa"];


// let arr = [15,19,2,3,4,1,9,6,5,11];
// console.log(arr.sort())


// const inp1 = ["apple","king","mango","akash","yash","vishwa"];
// let ans=inp1.sort((a,b)=>{
//     return a.localCompare-b.localCompare;
// })
// console.log(ans);


// const inp1 = ["apple","king","mango","akash","yash","vishwa"];


// console.log(inp1.sort());


//! Write a JavaScript program to find the most frequent item in an array. 
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// function fre(){
//     var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//     let fre = 0;
//     let min = arr1[0]; 
//     a < 3 
    
//     for(let i = 0; i<arr1.length;i++){
//         for(let j = 1; j<arr1.length;j++){
//             if(arr1[i] || arr1[j] < min){
//                 min = arr1[i];
//             }else if(arr1[j]==min){
//                 fre+= 1;              
//             }  
//         }
       
//     }

//var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3];



// {
//  3 : 1
// }
 
// const freqobj = arr1.reduce((acc,curr)=>{
//  // doing something
//   if(acc[curr]){
//    acc[curr]= acc[curr]+1;
//   }else{
//     acc[curr] = 1;
//   }
//   return acc;
// },{})

// console.log(freqobj);

// const obj = {
//   name : 'vishnu',
//   age : 23,
// }


// console.log(obj["gender"]);

// let ans ;
// let freq = 0; 4

// for(let num in freqobj){
//   if(freqobj[num]>freq){
//     ans = num;
//     freq = freqobj[num];
//   }
// }
// {
//   3 : 4,
//   a : 5,
//   2 : 2,
//  4 : 1,
//  9 : 1,
// }


// console.log(ans);

              
// const arr = [1,3,4,2,5,2,1,9]                            
// const duplicate = arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index) 
// console.log(duplicate);
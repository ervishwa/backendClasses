let , const , var keywords..

reg ex link  -> https://regex101.com

Promises ------------

Async opertaion in js..-> handel prmoise use.
its  a object which is used to handel async operation in js.

it has three state...

pending
fulfilled
rejected

state ,
result

till the state is in pending state result will be undefined.

how do we know when the state of a promise changes?

que -> after promise fullfilled/resolve then i want to clg("i have  done my work");

here promise obj has 3 inbuit methods..

then -> resolve
catch -> reject
finally -> always..



methods of Promise (6)


Promise.resolve()
Promise.reject()

Promise.all([])

basically this method will return Promise..which gets resolve once all the promise inside the array
got resolved/fulfilled..


Note -> if any promise inside the array this get rejected so catch method of 
promise.all will be excecuted.


Promise.allSettled([p1,p2,p3]); => if u we want to submit to all in any case..(will return all the values)

Promise.race([])=> jo phale ho resolve ho usko return karo

Promise.any() => value dedega error ho to koi bat nhi.

----------------------

async await

alternative syntax of Promise.then.catch


-----------------------


data fetching

fetch -> inbuilt
axios 


this -> this will alws points to some object..
normally this points to window object.
inside a function this point again window object..
but in sctrict mode inside a fun it will be undefined..

but we can change the where the this will point..(i can say which object it should point !)

with the help of call,bind,apply

<functionName>.call(<obj to point>)


---------------------------------

function ------

// function  a(){
//      return 2;
// }

// console.log(typeof a);


//function expression
//function decelaration


//function decelaration

function a(){
    return 2;
}

//function expression

const a = function k(){  => named function , anonyomus function
    return 10;
}

//function can be created by using FUNCTION OBJECT.


we cant make a function declaration a self invoking function..


function have properties and as well as some methods..

arguments.length  -> property
function.tostring() -> method

jab bhi koi function banta ha to uska pass js inbuilt ek object dedeta ha arguments..


note -> in js all the function are the methods of the obj.


function a(a,b){
  return a+b;
}

Points to remember 

1->  js function will not chq the data type.
2->  js function will not chq the no. of arguments passed..
3-> js function have not return type.


-----------------------

// 1 , 2 , 3 

// const ans = Math.max(1,2,3);

// console.log(ans);

const a = [1,2,3];

//const ans = Math.max(...a);  => Math.max(1,2,3)
//loop
//console.log(ans);

// const ans = Math.max.apply(0,a);
// console.log(ans);

-------------------------

a funtion returning a function..


--------------------------


//! Asynchronous js and Event loop

Event loop 
callback queue
MicroTask Queue








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









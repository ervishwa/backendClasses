import React, { useState } from "react";

export function Count() {
//   let count = 0;

//   const handelClick = () => {
//     count++;
//     console.log(count);
//   };
       // 1
 const[count,setCount] = useState(0);
   
  const handelClick = ()=>{
     setCount(count+1);  //async 5sec
     setCount(count+1);  
     setCount(count+1);
  }
 

  return (
    <div>
      Count- {count}
      <br />
      <button onClick={handelClick}>Inc Count</button>
    </div>
  );
}

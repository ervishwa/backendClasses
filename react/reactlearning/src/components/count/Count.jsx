import React, { useState } from "react";

export function Count(props) {
//   let count = 0;

//   const handelClick = () => {
//     count++;
//     console.log(count);
//   };
       // 1
 const[count,setCount] = useState(0);
   
  // const handelClick = ()=>{
  //    setCount(count+1);  //async 5sec
  //    setCount(count+1);  
  //    setCount(count+1);
  // }

  const{num} = props;
 
  const handelClick = (num) => {
    setCount(count+Number(num));
  }

  return (
    <div>
      Count- {count}
      <br />
      <button onClick={()=>handelClick(num)}>Inc Count</button>
    </div>
  );
}

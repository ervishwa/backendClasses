import React from 'react'

export function Events() {

   //event handler functions
   const handelClick = ()=>{
    alert("You clicked ME!");
   }

  return (
    <div>
        <h1>Action user Events</h1>
        <button onClick={handelClick}>Click ME</button>
    </div>
  )
}


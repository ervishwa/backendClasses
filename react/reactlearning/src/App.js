import { useState } from "react";
import { MyButton } from "./components/mybutton/MyButton"
import { Profile } from "./components/profile/Profile";
import { List } from "./components/list/List";
import { NewList } from "./components/list/NewList";
import { Events } from "./components/events/Events";
import { Count } from "./components/count/Count";
import { Temp } from "./components/temp/Temp";

export const App = ()=>{
  const name = "versha";
  const[isvisible,setIsvisible] = useState(false);
  // let ele ;
  // if(isvisible){
  //   ele = <MyButton/>;
  // }else{
  //   ele = <Profile/>
  // }
  return (
     <div>
    <h1>hello {name}</h1>
{/* {
  isvisible ? <MyButton/> : <Profile/>
} */}
    {/* <List/> */}
    {/* <NewList/> */}
    {/* <Events/> */}
    {/* <Count num="1"/>
    <Count num="5"/> */}
    <Temp />
    </div>
    
  )
}
import { MyButton } from "./components/mybutton/MyButton"
import { Profile } from "./components/profile/Profile";

export const App = ()=>{
  const name = "versha";

  return (
     <div>
    <h1>hello {name}</h1>
     <MyButton/>
     <Profile/>
    </div>
    
  )
}
import { useState } from "react"
import Startgame from "./components/startgame"
import Play from "./components/play"



function App() {
  const[isGamestarted,setisGamestarted]=useState(false);

  const togglegame=()=>{
    setisGamestarted((prev)=>!prev)
  };
  return (
   <>
   {
      isGamestarted ? <Play/>:<Startgame
      toggle={togglegame}
      />

   }
   
  </>
  )
}

export default App


import Totalscore from "./Totalscore";
import Number from "./Number";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rule from "./Rule";


const Play = () => {
  const [score, setscore]= useState(0);
  const[selcternumber, setselecternumber]=useState();
  const[currentdice, setcurrentdice]=useState(1);
  const[error, seterror]=useState("");
  const[showrule, setshowrule]=useState(false)


  


  const generatenumber=(min,max)=>{
    //console.log( Math.floor(Math.random()*(max-min)+min));
    return Math.floor(Math.random()*(max-min)+min);
 
};
const rolldice2=()=>{
    const rendomenumberrr=generatenumber(1,7);
    if(!selcternumber) {
      seterror("YOU HAVE NOT SELECTED ANY NUMBER"); 
      return;
    }
 
    setcurrentdice((prev)=>rendomenumberrr)
 

if(rendomenumberrr==selcternumber){
  setscore((prev)=>prev+rendomenumberrr)
}
else{
  setscore((prev)=>prev-2)
}

setselecternumber(undefined)




}

const resetScore=()=>{
  setscore(0);
  
};
  return (
    <Maincontainer>
       <div className="topsection">
       <Totalscore 
       score={score}/>
        <Number
        error={error}
        seterror={seterror}
        selcternumber={selcternumber} setselecternumber={setselecternumber}
        />
       </div>
       <Rolldice 
       currentdice={currentdice} rolldice2={rolldice2}/>
    <div className="btn">
    <OutlineButton
    onClick={resetScore}
    >RESET </OutlineButton>
    <Button
    onClick={()=>setshowrule((prev)=>!prev)}
    >{showrule?"hide":"show"} rules</Button>
    </div>
   { showrule &&<Rule/>}
    </Maincontainer>
  )
}

export default Play


const Maincontainer  =styled.main`
      padding-top: 17px;

    .topsection{
        display: flex;
        justify-content: space-around;
        align-items: end;
        
    }
    .btn{
      margin-top: 40px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       gap: 15px;
    }

`
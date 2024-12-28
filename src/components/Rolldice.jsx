//import { useState } from "react";
import styled from "styled-components";


const Rolldice = ({rolldice2,currentdice}) => {
// const[currentdice, setcurrentdice]=useState(1);
// const generatenumber=(min,max)=>{
//     //console.log( Math.floor(Math.random()*(max-min)+min));
//     return Math.floor(Math.random()*(max-min)+min);
 
// };
// const rolldice2=()=>{
//     const rendomenumberrr=generatenumber(1,7);
//     setcurrentdice((prev)=>rendomenumberrr)
// }


  return (
    <Dicecontainer>
       <div className="dice"
       onClick={rolldice2}
       > <img src={`/images/dice/dice_${currentdice}.png`} alt="dice1" /></div>
       <p>Click on dice roll</p>
    </Dicecontainer>
  )
}

export default Rolldice;

const Dicecontainer =styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    margin-top: 50px;
   p{
    font-size: 24px;
   }
   .dice{
    cursor: pointer;

   }

`


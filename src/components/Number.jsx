
//import { useState } from "react";
import styled from "styled-components"
const Number = ({seterror,error,selcternumber,setselecternumber}) => {
    const arr=[1,2,3,4,5,6];
    // const[selcternumber, setselecternumber]=useState();
    const errorhander=(value)=>{
        setselecternumber(value)
        seterror("");
    }


  return (
  <Numberselecter>
    <p className="error">{error}</p>
    <div className="flex">
        {
            arr.map((value,i)=>(
                <Box
                isSelected={value==selcternumber}
                key={i}
                onClick={
                 ()=>errorhander(value)
                }
                >{value}</Box>
            ))
        }
    </div>
    <p>Select Number</p>
    </Numberselecter>
  )
  
};

export default Number;
const Numberselecter=styled.div`
        display: flex;
        flex-direction: column;
        align-items: end;


    .flex{
        display: flex;
       gap: 24px;
     
    }
    p{
        font-size:24px ;
        font-weight: 500;
    }
    .error{
        color: red;
        font-weight: bolder;
        
    }
    
`


const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size:24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ?"black":"white")};
   color: ${(props) => (props.isSelected ?"white":"black")};
`
import styled from "styled-components"

export const Button=styled.button`
/* align-items: center;
display: flex;
flex-direction: column;
justify-content: center; */
color: white;
width: 220px;
/* height: Hug (44px)px; */
background: black;
padding: 10px 18px 10px 18px;
/* gap: 10px; */
border: 1px solid transparent;
border-radius: 5px ;
font-size:16px ;
transition: 0.6s  ease-in;
cursor: pointer;

&:hover{
    background-color: #ff0101b6;
    border: 1px solid black;
    color: black;
    transition: 0.5s  ease-in;

}

`;
export const OutlineButton=styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
  
}
`
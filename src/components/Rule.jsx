import styled from "styled-components"

const Rule = () => {
  return (
    <Rulescontainer>
        <h1>How to play dice game</h1>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice picture</p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>If you get wrong guess then 2point will be deducted</p>
        </div>
    </Rulescontainer>
  )
}

export default Rule

    const Rulescontainer=styled.div`
    background-color: bisque;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 20px;
    h1{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
    `
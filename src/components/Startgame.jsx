
import styled from 'styled-components';
import { Button } from '../styled/Button';


const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
        <div className='containt'>
            <h1>
                 Dice Game
            </h1>
            <Button
            onClick={toggle}
            >PlayNow</Button>
            </div>
    </Container>
  )
}

export default Startgame
const Container=styled.div`
max-width:1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;


.containt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
 
    h1{ font-size: 96px;}  
    white-space: nowrap;


}


`;

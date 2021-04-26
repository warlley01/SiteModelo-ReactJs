import styled from 'styled-components'
import connect from '../img/connect.png'


const Div = styled.div`
    width: 100%;
    height: 50px;     
    margin-bottom: 50px;
    padding: 0;
    display: flex;
    justify-content: end;    
`

const H1 = styled.h1`   
    color: #707070;
    font-size: 42pt;
    margin: 0 80px 0 0;
    padding: 0;
`
/* const Img = styled.img`
    width: 35px;
    height: 35px;
    margin: 0;
    padding: 0;
    display: flex;
    float: left;
` */

const Square = styled.div`
   position: absolute;
   z-index: -1;
   border-radius: 50px;    
   width: 700px;
   height: 90px;
   margin: -1px 30px 0 0;
   background-color: #dbdbdb; 
   padding: 0;
`

function Info(){
    return(
        <Div>
             {/* <Img src={connect} /> */} 
            <Square />
            <H1>Planejamento</H1>
        </Div>
    )
}

export default Info
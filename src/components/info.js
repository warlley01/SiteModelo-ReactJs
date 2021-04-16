import styled from 'styled-components'
import connect from '../img/connect.png'


const Div = styled.div`
    width: 300px;
    height: 50px;     
    
    margin-bottom: 50px;
    padding: 0;
`

const H1 = styled.h1`   
    color: #818181;
    font-size: 28pt;
    margin: 0;
    padding: 0;
    text-align: center;
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
   border-radius: 30% 32% 50% 50% / 22% 21% 81% 77% ;    
   width: 700px;
   height: 700px;
   margin-left: 200px;
   margin-top: 20px;
   /* background-color: #dadada; */
   z-index: -1;
   position: absolute;
  
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
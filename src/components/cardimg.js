import styled from 'styled-components';

const Cards = styled.div`         
     img{
        margin-top: 0;
        border-radius: 5px;    
        width: 400px;
        height: 250px;         
     }   
`

function Cardimg(props) {      
    return(        
        <Cards>              
            <img src={props.image} />                       
        </Cards> 
    )    
}

export default Cardimg;
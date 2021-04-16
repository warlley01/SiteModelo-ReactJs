import styled from 'styled-components';

const Cards = styled.div`    
    background-color: #e5e5e5;   
    width: 400px;
    height: 250px;    
    margin-top: 0;
    border-radius: 5px;    
    display: flex;
    align-items: center;
    h2{
        text-align: center;
        text-justify: center;
        color: #747474;
        padding-top: 20px;    
        margin: 0;
    }
    p{
        text-align: center;
        padding: 0;
        color: #747474;
        text-align: center;
        margin-right: 20px;
        margin-left: 20px;
     }
         
`

function Card(props) {
   
    return(        
        <Cards> 
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>                                                    
            </div>               
        </Cards> 
    )
    
}

export default Card;
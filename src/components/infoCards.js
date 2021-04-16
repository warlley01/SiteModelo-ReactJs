import styled from 'styled-components'
import card from '../components/cards'


const Card = styled.div`
    display: flex;    
    width: 400px;
    height: 250px;    
    margin-bottom: 50px;
    margin-left: 60px;
    margin-right: 60px;
    h2{
        color: #787878;
        margin: 0;
        padding: 0;
        text-align: end;       
    }
    p{
        margin: 0;
        padding: 0;
        color: #747474;
        text-align: end;        
    }
    img{
        width: 80px;
        height: 80px;
    }
`

function infoCard(props){
    return(
        <Card>
            <div>
                <img src={props.img} />
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>            
        </Card>
    )
}

export default infoCard;

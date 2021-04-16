import styled from 'styled-components'
import image from '../img/vacation.jpg'
import image2 from '../img/carrinho.jpg'

const Image = styled.img`
    width: 750px;
    height: 480px;  
    float: right;
    margin-right: 0;
    margin-top: 40px;
    border-radius: 10px;
`
const Titulo = styled.h1`
    color: #747474;   
    font-size: 56pt;
    font-family: 'Playfair Display', serif;
    margin: 0;
    text-align: center;

`
const Div = styled.div`
    width: 500px;
    height: 300px;
    margin-left: 30px;
    float: left;
    margin-top: 145px;

    p{
        color: #747474;
        font-size: 16pt;
        text-align: center;
    }
`
const Circle = styled.div`
    background-color: #dadada;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    position: absolute;
    margin-left: 300px;
    margin-top: 120px;
    z-index: -1;
`
const Image2 = styled.img`
   width: 710px;
   height: 420px;
   margin-top: 140px;
   margin-left: 30px;
   border-radius: 10px;
   margin-bottom: 70px;
`
const Div2 = styled.div`
   float: right;   
   margin-top: 260px;
   width: 500px;
   height: 300px;
   margin-right: 30px;
   p{
       color: #747474;
       font-size: 16pt;
       text-align: center;
       padding: 20px;
   }
`
const Square = styled.div`
   border-radius: 30px;
   margin-left: 500px;   
   height: 120px;
   width: 800px;
   background-color: #dadada;
   margin-top: 880px;
   z-index: -1;
   position: absolute;
   display: flex;
`

function Header(){
    return(
        <div>
            <Circle />
            <Div>
                <Titulo>Minimalismo</Titulo>
                <p>Num mundo de excesso, simplificar a vida é uma forma de enriquecê-la</p>
            </Div>
            <Image src={image} />
            
            <Square />
            <div>
                <Image2 src={image2} />
                <Div2>
                    <Titulo>Oportunidades</Titulo>
                    <p>Pequenas escolhas podem gerar grandes mudanças</p>
                </Div2>
            </div>
        </div>
    )
}

export default Header;
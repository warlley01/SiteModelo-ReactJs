import React, {Component} from 'react'
import Container from './components/container'
import UL from './components/navbar'
import Header from './components/header' 
import Card from './components/cards'
import styled from 'styled-components'
import ULcard from './components/ulCard'
import card1 from './img/card1.jpg'
import card3 from './img/card3.jpg'
import card5 from './img/card5.jpg'
import Cardimg from './components/cardimg'
import Div from './components/div'
import Info from './components/info'
import InfoCard from './components/infoCards'
import lupa from './img/lupa.png'
import graph from './img/graph.png'
import hand from './img/hand.png'
import mix from './img/mix.png'
import Footer from './components/footer'

const LI = styled.li`
  margin: 0;
  padding: 0;  
  height: 280px;
`

function App() {
  return (
    <div>
      <UL>
        <li>Home</li>
        <li>Produto</li>
        <li>Sobre</li>
        <li>Contato</li>
      </UL>
      <Container>
        <Header />
        <Div>
          <ULcard>            
            <li><Cardimg image={card1} /></li> 
            <li><Card title="Best Experience" text="Liquorice tiramisu wafer carrot cake biscuit marzipan donut danish. Soufflé" /></li>
            <li><Cardimg image={card3} /></li>
          </ULcard>  
          <ULcard>
            <li><Card title="Influences Of Gutenberg" text="Jelly-o cake chocolate bar marzipan. Jelly tootsie roll liquorice pastry" /></li>
            <li><Cardimg image={card5} /></li>
            <li><Card title="Great Digital Agency" text="Web design encompasses many different skills and disciplines in the"/></li>                                  
          </ULcard> 
        </Div>  
        <Info />
        <ULcard>
          <LI><InfoCard img={lupa} title="Fast Turnaround" text="Liquorice tiramisu wafer carrot cake biscuit marzipan donut danish. Soufflé chocolate cake." /></LI>
          <LI><InfoCard img={graph} title="Elegant Design" text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black." /></LI>
        </ULcard>
        <ULcard>
          <LI><InfoCard img={hand} title="Super Fresh" text="Web design encompasses many different skills and disciplines in the production and maintenance." /></LI>
          <LI><InfoCard img={mix} title="Award Winning" text="Image editing encompasses the processes of altering images, whether they are digital" /></LI>
        </ULcard>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

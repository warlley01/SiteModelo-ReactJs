import styled from 'styled-components'

const Div = styled.div`
    background-color: #727272;
    height: 250px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16pt;
    font-family: sans-serif;
    margin-top: 80px;
`

function Footer() {
    return (
        <Div>
            <p>Autor: Warlley Jhones</p>
        </Div>
    )
}

export default Footer;

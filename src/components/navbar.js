import styled from 'styled-components'

const UL = styled.ul`  
    display: flex;   
    justify-content: center; 
    border-bottom: solid;
    border-width: 1px;
    border-color: #c2c2c2;
    margin: 0;
    padding: 0;
    /*overflow-x: hidden; /* pessima ideia */ 
    li {
        color: #747474;
        font-size: 14pt;
        font-family: 'Dosis', sans-serif;
        list-style: none;                      
        margin-right: 50px;
        margin-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
`;

export default UL
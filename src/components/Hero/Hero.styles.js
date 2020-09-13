import styled from "styled-components"

export const HeroWrapper = styled.section`
  background: url('${props => props.backgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  display: flex;
  align-items: center;  
  text-align: center;
  color: white;
 
  div {
    margin: 0 auto;
    padding: 2rem;
  }
`
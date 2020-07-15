import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const HeroWrapper = styled.section`
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

const Hero = ({ title, content, backgroundImage }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div>
        <RichText render={title} />
        <RichText render={content} />
      </div>
    </HeroWrapper>
  )
}

export default Hero

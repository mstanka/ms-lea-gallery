import React from "react"
import { RichText } from "prismic-reactjs"
import { HeroWrapper } from "./Hero.styles"

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

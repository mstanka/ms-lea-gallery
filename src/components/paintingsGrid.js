import React from "react"
import styled from "styled-components"
import PaintingCard from "./paintingCard"

const PaintingsGridWrapper = styled.section`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);    
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PaintingsGrid = ({ paintings }) => {
  return (
    <PaintingsGridWrapper>
      {paintings.map((painting, i) => {
        return (
          <PaintingCard
            paintingTitle={painting.painting_title}
            paintingThumb={painting.painting_thumb.url}
            paintingLink={`/${painting.painting_link._meta.uid}`}            
            key={i}
          />
        )
      })}
    </PaintingsGridWrapper>
  )
}

export default PaintingsGrid

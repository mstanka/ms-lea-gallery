import React from "react"
import styled from "styled-components"
import PaintingCard from "./paintingCard"

const PaintingsGridWrapper = styled.section`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
`

const PaintingsGrid = ({ paintings }) => {
  return (
    <PaintingsGridWrapper>
      {paintings.map((painting, i) => {
        return (
          <PaintingCard
            paintingTitle={painting.painting_title}
            paintingThumb={painting.painting_thumb.url}
            paintingLink={`/${painting.link._meta.uid}`}            
            key={i}
          />
        )
      })}
    </PaintingsGridWrapper>
  )
}

export default PaintingsGrid

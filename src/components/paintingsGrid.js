import React from "react"
import styled from "styled-components"
import PaintingCard from "./paintingCard"

const PaintingsGridWrapper = styled.section`
  max-width: 800px;
  margin: 2rem auto; 
`

const PaintingsGrid = ({ paintings }) => {
  return (
    <PaintingsGridWrapper>
      {paintings.map((painting, i) => {
        return (
          <PaintingCard
            paintingTitle={painting.painting_title}
            paintingThumb={painting.painting_thumb.url}
            buttonLabel={painting.button_label}
            buttonDestination={`/${painting.button_destination._meta.uid}`}
            key={i}
          />
        )
      })}
    </PaintingsGridWrapper>
  )
}

export default PaintingsGrid

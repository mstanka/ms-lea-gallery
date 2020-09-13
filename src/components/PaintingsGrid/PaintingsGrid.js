import React from "react"
import { PaintingsGridWrapper} from "./PaintingsGrid.styles"
import PaintingCard from "../PaintingCard/PaintingCard"

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

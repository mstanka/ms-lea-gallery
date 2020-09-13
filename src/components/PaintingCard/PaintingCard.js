import React from "react"
import { RichText } from "prismic-reactjs"
import { PaintingCardWrapper } from "./PaintingCard.styles"
import { Link } from "gatsby"

const PaintingCard = ({ paintingTitle, paintingThumb, paintingLink }) => {
  return (
    <PaintingCardWrapper>
      <RichText render={paintingTitle} />
      <div className="painting-card-content">
        <Link to={paintingLink}>
          <img src={paintingThumb} alt="Painting" />
        </Link>
      </div>
    </PaintingCardWrapper>
  )
}

export default PaintingCard

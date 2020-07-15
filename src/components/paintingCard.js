import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { Link } from "gatsby"

const PaintingCardWrapper = styled.section`
  padding: 1rem;
  background: #0a5959;
  border-radius: 10px;
  text-align: center;
  width: 320px;
  margin: 1rem auto;
  color: white;

  .painting-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;

    a {
      cursor: pointer;
    }
  }
`

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

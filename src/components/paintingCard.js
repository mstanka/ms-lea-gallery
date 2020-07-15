import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { Link } from "gatsby"

const PaintingCardWrapper = styled.section`
  padding: 1rem;
  background: #0a5959;
  border-radius: 5px;
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
      transition: transform .4s ease-in;

      img {
        width: 100%;
        border: 1px solid white;
        box-shadow: 1px 1px 2px purple;
      }
    }

    a:hover {
      transform: scale(1.01);
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

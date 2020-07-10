import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { Link } from "gatsby"

const PaintingCardWrapper = styled.section`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 20px 0;
  text-align: center;

  .painting-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Button = styled.div`
  background: purple;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  width: 30%;
  margin: 0 auto;

  a {
    color: white;
    padding: 5px 10px;
    display: inline-block;
    text-decoration: none;
  }
`

const PaintingCard = ({
  paintingTitle,
  paintingThumb,
  buttonLabel,
  buttonDestination,
}) => {
  return (
    <PaintingCardWrapper>
      <RichText render={paintingTitle} />
      <div className="painting-card-content">
        <div>
          <img src={paintingThumb} alt="Painting" />
        </div>
        <Button>
          <Link to={buttonDestination}>{buttonLabel}</Link>
        </Button>
      </div>
    </PaintingCardWrapper>
  )
}

export default PaintingCard

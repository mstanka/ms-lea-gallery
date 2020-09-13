import styled from "styled-components"

export const PaintingsGridWrapper = styled.section`
  margin: 2rem auto 0;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

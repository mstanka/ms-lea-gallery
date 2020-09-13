import styled from "styled-components"

export const MainWrapper = styled.main`
  max-width: 400px;
  margin: 0 auto;
  background: var(--featured-bg);

  @media screen and (min-width: 768px) {
    max-width: 730px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`

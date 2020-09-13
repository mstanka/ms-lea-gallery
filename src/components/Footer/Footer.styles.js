import styled from "styled-components"

export const FooterWrapper = styled.header`
  background: var(--header-bg);
  color: var(--primary-text-color);
  min-height: 60px;
  padding: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    max-width: 730px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }

  a {
    color: var(--primary-text-color);
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      color: var(--secondary-text-color);
      border-bottom: 6px solid var(--secondary-text-color);
    }
  }
`
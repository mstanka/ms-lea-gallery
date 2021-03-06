import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  min-height: 100px;
  padding: 0 1rem;
  box-sizing: border-box;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 730px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`
export const Branding = styled.div`
  margin-right: auto;

  a {
    color: var(--secondary-text-color);
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
  }
`

export const NavLinks = styled.div`
  display: flex;
`

export const NavLink = styled.div`
  a {
    color: var(--primary-text-color);
    padding-bottom: 0.5rem;
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      color: var(--secondary-text-color);
      border-bottom: 6px solid var(--secondary-text-color);
    }
  }
`

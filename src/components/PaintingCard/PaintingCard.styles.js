import styled from "styled-components"

export const PaintingCardWrapper = styled.section`
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 5px;
  text-align: center;
  max-width: 310px;
  width: 100%;
  min-height: 420px;
  margin: 1rem auto;
  color: var(--primary-text-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  box-shadow: 0 1px 5px var(--primary-text-color);

  .painting-card-content {
    a {
      cursor: pointer;
      transition: transform 0.4s ease-in;

      img {
        width: 100%;
        border: 1px solid var(--primary-text-color);
        box-shadow: 0 1px 1px var(--primary-text-color);
      }
    }

    a:hover {
      transform: scale(1.01);
    }
  }
`

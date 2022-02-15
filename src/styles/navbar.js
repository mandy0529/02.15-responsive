import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: var(--main-3);
  display: flex;
  align-items: center;
  justify-content: center;
 
  .bar-btn {
    color: var(--main-white);
    display: none;
  }
  a {
    margin: 0 2rem;
    color: var(--main-white);
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--main-white);
      color: var(--main-3);
    }
  }

  @media screen and (max-width: 900px) {
    justify-content: right;
    a {
      display: none;
    }
    .bar-btn {
      display: block;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
          transform:scale(0.94);
      }
    }
  }
`;

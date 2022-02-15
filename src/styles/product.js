import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  div {
    margin: 1rem;
    width: 300px;
    height: 300px;
    margin: 2rem;
    h3 {
      font-size: 1.3rem;
    }
  }
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    div {
      margin: 2rem auto;
    }
    img {
      min-width: 50px;
      object-fit: hidden;
    }
  }
  @media screen and (max-width: 410px) {
    div {
      max-width: 150px;
      height: 100px;
    }
    img {
      min-width: 30px;
    }
  }
`;

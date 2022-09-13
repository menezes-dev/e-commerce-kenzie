import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  max-width: 900px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  border: 1px solid red;

  @media screen and (max-width: 630px) {
    justify-content: center;
  }

  @media screen and (max-width: 450px) {
    width: calc(100vw - 5%);
    overflow-x: scroll;
    flex-wrap: nowrap;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 50px;

  max-width: 1300px;

  @media screen and (max-width: 1340px) {
    width: 100vw;
    padding: 0 20px;
  }

  @media screen and (max-width: 870px) {
    width: 100vw;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

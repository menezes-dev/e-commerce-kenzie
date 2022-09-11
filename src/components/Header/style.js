import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-0);
  box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1340px) {
    margin: 0 20px;
  }
`;

export const ContainerHeader = styled.header`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border: 1px solid red;

  @media screen and (max-width: 360px) {
    width: 80%;
    overflow-x: scroll;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 1px solid red;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  input {
    width: 246px;
    height: 100%;

    padding: 17px 15px;

    background-color: var(--grey-0);

    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--grey-50);
  }

  button {
    width: 96px;
    height: 100%;

    border: none;
    padding: 17px 10px;

    background-color: var(--color-secondary);

    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-0);
  }
`;

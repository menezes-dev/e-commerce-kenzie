import styled from "styled-components";

export const Container = styled.li`
  width: calc((100% - 40px) / 3);

  @media screen and (max-width: 1015px) {
    width: calc((100% - 40px) / 2);
  }

  @media screen and (max-width: 870px) {
    width: calc((100% - 40px) / 3);
  }

  @media screen and (max-width: 630px) {
    width: calc((100% - 40px) / 2);
  }

  height: 410px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  text-align: left;

  border: 1px solid red;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  max-width: 100%;

  border: 1px solid green;

  padding: 20px 15px;

  h3 {
    border: 1px solid yellow;

    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: var(--grey-100);
  }

  p {
    border: 1px solid yellow;

    /* display: inline-block;
    width: 100%; */

    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--grey-50);
  }

  button {
    background: none;
    border: none;

    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    color: var(--grey-50);
  }

  .card-category {
    display: inline-block;
    background-color: var(--color-primary);
    padding: 5px 10px;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-0);
  }

  .card-price {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: var(--color-primary);
  }
`;

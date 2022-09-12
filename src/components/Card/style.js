import styled from "styled-components";

export const Container = styled.li`
  width: calc((100% - 40px) / 3);
  height: 410px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  border: 1px solid red;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

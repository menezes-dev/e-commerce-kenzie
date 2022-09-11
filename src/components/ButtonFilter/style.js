import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;

  background: none;
  border: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  &:focus {
    font-weight: 600;
  }
`;

export default Button;

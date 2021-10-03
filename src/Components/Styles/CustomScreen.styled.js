import styled from "styled-components";

export const CustomScreen = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background.screen};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2em;
  color: ${({ theme }) => theme.headerColor};
  font-weight: 700;
  padding: 10px;
  padding-right: 30px;
  letter-spacing: 0.03em;
  overflow: hidden;
`;

import styled from "styled-components";

export const CustomHeader = styled.header`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  line-height: 1;
  color: ${({ theme }) => theme.headerColor};
  font-weight: 700;
  height: 100%;
`;

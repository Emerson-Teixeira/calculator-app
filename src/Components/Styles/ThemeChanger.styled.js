import styled from "styled-components";
const pos = {
    0:'flex-start',
    1:'center',
    2:'flex-end',
}
export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 150px;

  height: 100%;
`;
export const Label = styled.div`
  font-size: 0.4em;
  font-weight: 750;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.headerColor};
`;
export const SwitchBox = styled.div`
  height: 25px;
  width: 75px;
  background-color: ${({ theme }) => theme.background.keypad};
  border-radius: 12px;
  padding: 5px;
  display: flex;
  
  justify-content: ${({position}) => pos[position] } ;
  align-items: center;
`;
export const SwitchWrapper = styled.div``;

export const Ball = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.keys.equal.color};
  width: 16px;
  height:16px;
  :hover{
    cursor: pointer;
  }
`;
export const FlexRowSpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px 7px;
  padding-bottom: 5px;
`;
export const Number = styled.div`
  font-size: 0.4em;
  font-weight: 750;
  color: ${({ theme }) => theme.headerColor};
`;

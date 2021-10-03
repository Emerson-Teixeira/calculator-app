import styled from "styled-components";
const col = {
  equal: "3/5",
  resetDel: "1/3",
};
export const KeyboardGrid = styled.div`
  width: 100%;
  border-radius: 12px;
  min-height: 420px;
  max-height: 450px;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 200px));
  grid-template-rows: repeat(5, 0.5fr);
  grid-gap: 20px;
  padding: 25px;
  background-color: ${({ theme }) => theme.background.keypad};
  margin-top: 20px;
  @media(max-width:758px){
    grid-gap: 15px;
  }
`;

export const Key = styled.button`
  border-radius: 6px;

  color: ${({ theme, typeKey }) =>
    typeKey === "commonKeys"
      ? theme.text.commonKeys
      : typeKey === "equal"
      ? theme.text.equal || theme.text.white
      : theme.text.white};

  background-color: ${({ theme, typeKey }) => theme.keys[typeKey].color};
  box-shadow: 0px 4px 0px 0px
    ${({ theme, typeKey }) => theme.keys[typeKey].shadow};
  border: none;
  font-size: ${({ theme, typeKey }) =>
    typeKey === "commonKeys" ? "0.9em" : "0.55em"};
  font-weight: 700;
  grid-column: ${({ theme, typeKey, ...rest }) => {
    if (["equal", "resetDel"].includes(typeKey)) {
      if (rest.isDel) {
        return col["commonKeys"];
      } else {
        return col[typeKey];
      }
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
`;

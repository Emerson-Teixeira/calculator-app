import {
  Wrapper,
  Label,
  SwitchWrapper,
  SwitchBox,
  Ball,
  FlexRowSpaceBetween,
  Number
} from "./Styles/ThemeChanger.styled.js";
export default function ThemeChanger({ theme, setTheme }) {
  function changeTheme(e) {
    e.preventDefault();
    if (theme === 2) {
      setTheme(0);
      return;
    } else {
      setTheme(theme + 1);
      return;
    }
  }
  return (
    <div>
      <Wrapper>
        <Label>THEME</Label>
        <SwitchWrapper>
          <FlexRowSpaceBetween>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
          </FlexRowSpaceBetween>
          <SwitchBox position={theme}>
            <Ball onClick={changeTheme} />
          </SwitchBox>
        </SwitchWrapper>
      </Wrapper>
    </div>
  );
}

import { CustomHeader, Logo } from "./Styles/Header.styled.js";
import { Wrapper } from "./Styles/Wrapper.styled";
import ThemeChanger from './ThemeChanger.js'
export default function Header({setTheme, theme}) {
    return (
        <CustomHeader>
            <Wrapper>
                <Logo>calc</Logo>
                <ThemeChanger setTheme={setTheme} theme={theme}/>
            </Wrapper>
        </CustomHeader>
    )
}

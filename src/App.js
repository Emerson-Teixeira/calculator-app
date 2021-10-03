import { useState, useEffect } from "react";

//theme
import { ThemeProvider } from "styled-components";
import { theme1, theme2, theme3 } from "./Components/assets/Theme/theme.js";

//components
import Header from "./Components/Header.js";
import Screen from "./Components/Screen.js";
import Keyboard from "./Components/Keyboard.js";

//Styles
import { GlobalStyle } from "./Components/assets/GlobalStyle/GlobalStyle.js";
import { Container } from "./Components/Styles/Container.styled.js";

const themes = {
  0: theme1,
  1: theme2,
  2: theme3,
};

function App() {
  const [themeNumber, setThemeNumber] = useState(0);
  const [themeSelected, setThemeSelected] = useState(themes[themeNumber]);
  const [result, setResult] = useState('')

  useEffect(() => {
    setThemeSelected(themes[themeNumber]);
  }, [themeNumber]);
  return (
    <ThemeProvider theme={themeSelected}>
      <GlobalStyle />
      <Container>
        <Header theme={themeNumber} setTheme={setThemeNumber} />
        <Screen result={result} />
        <Keyboard setResult={setResult} result={result} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

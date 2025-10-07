import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = { primary: 'blue' };

const GlobalStyle = createGlobalStyle`
  html { font-size: 10px; box-sizing: border-box; }
  *, *::before,*::after { box-sizing: inherit; margin:0; }
  body { font-family: system-ui, -apple-system, BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

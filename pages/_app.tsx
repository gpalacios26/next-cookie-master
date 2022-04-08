import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';
import { darkTheme, lightTheme, customTheme } from '../themes';
import '../styles/globals.css';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = 'light' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || theme;
    const selectedTheme = (cookieTheme === 'light') ? lightTheme
      : (cookieTheme === 'dark') ? darkTheme : customTheme;
    setCurrentTheme(selectedTheme);
  }, [Cookies.get('theme')]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;

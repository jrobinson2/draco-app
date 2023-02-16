import React from 'react';
import { useRoutes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { CacheProvider } from '@emotion/react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import createTheme from './theme';
import routes from './routes';

import useTheme from './hooks/useTheme';

import createEmotionCache from './utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function App({ emotionCache = clientSideEmotionCache }) {
  const content = useRoutes(routes);

  const { theme } = useTheme();

  return (
    <CacheProvider value={emotionCache}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Tinker" defaultTitle="Tinker Dashboard" />
        <MuiThemeProvider theme={createTheme(theme)}>
          {content}
        </MuiThemeProvider>
      </HelmetProvider>
    </CacheProvider>
  );
}

export default App;

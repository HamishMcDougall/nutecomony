import { MantineProvider } from '@mantine/core';
import Main from './Main';

import './App.css';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
    theme={{
      // Override any other properties from default theme
      headings: {
        sizes: {
          h2: { fontSize: '3rem', },
        }
      }
    }}
  >
    <Main />
  </MantineProvider>
  );
}
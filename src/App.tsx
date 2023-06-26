import { MantineProvider } from '@mantine/core';
import Main from './Main';


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
    theme={{
      // Override any other properties from default theme
    }}
  >
    <Main />
  </MantineProvider>
  );
}
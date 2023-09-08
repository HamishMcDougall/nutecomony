import { MantineProvider } from '@mantine/core';
import Main from './Main';
import './App.css';

export default function App() {
  return (
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        // Override any other properties from default theme
        headings: {
          fontFamily: 'ADLaM Display, sans-serif',
          sizes: {
            h2: { fontSize: '3rem', },
            h3:{ fontSize:'3.5rem',},
          }
        },
        // Override button styles
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params) => ({
              root: {
                borderRadius: 20,
                color: params.color === 'light' ? 'white' : 'white',
                backgroundColor: params.color === 'light' ? '#000000' : '#000000',
                '&:hover': { 
                  backgroundColor: params.variant === 'filled'
                    ? '#F4D35E'
                    : '#F4D35E'
                }
              },
            }),
          },
        },
      }}
    >
      <Main />
    </MantineProvider>
  );
}

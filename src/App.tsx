import { MantineProvider } from '@mantine/core';
import {MainFrame} from './MainFrame';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainFrame />
    </MantineProvider>
  );
}
import { AppShell, Drawer, Header } from '@mantine/core';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';


 let data = [
    {
      "link": "#",
      "label": ""
    },
   
  ]

  let user = [
    {
      "link": "#",
      "label": ""
    },
  
  ]


export function MainFrame() {
  return (
    <AppShell 
      padding="md"  
      header={<Header height={60} p="xs">{<Navbar mainLinks={data} userLinks={user} />}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Drawer opened={false} onClose={function (): void {
              throw new Error('Function not implemented.');
          } } />
      <Outlet />
    </AppShell>
  );
}
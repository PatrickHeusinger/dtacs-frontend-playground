import { AppShell, Header } from '@mantine/core';
import { Navbar } from './Navbar';

let data = [
    {
      "link": "demo",
      "label": "Book a demo"
    },
    {
      "link": "#",
      "label": "Documentation"
    },
    {
      "link": "#",
      "label": "Community"
    },
    {
      "link": "#",
      "label": "Academy"
    },
    {
      "link": "#",
      "label": "Forums"
    }
  ]

  let user = [
    {
      "link": "#",
      "label": "Privacy & Security"
    },
    {
      "link": "#",
      "label": "Account settings"
    },
    {
      "link": "#",
      "label": "Support options"
    }
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
      {/* Your application here */}
    </AppShell>
  );
}
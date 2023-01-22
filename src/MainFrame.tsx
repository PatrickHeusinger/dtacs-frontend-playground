import { AppShell, Drawer, Header, Footer } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";

let data = [
  {
    link: "#",
    label: "",
  },
];

let user = [
  {
    link: "#",
    label: "Privacy & Security",
  },
  {
    link: "#",
    label: "Account settings",
  },
  {
    link: "#",
    label: "Support options",
  },
];

let items = [
  {
    link: "#",
    label: "Contact",
  },
  {
    link: "#",
    label: "Privacy",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Store",
  },
  {
    link: "#",
    label: "Careers",
  },
];

export function MainFrame() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          {<Navbar mainLinks={data} userLinks={user} />}
        </Header>
      }
      footer={
        <Footer height={80} p="xs">
          {<AppFooter links={items} />}
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Drawer
        opened={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <Outlet />
    </AppShell>
  );
}

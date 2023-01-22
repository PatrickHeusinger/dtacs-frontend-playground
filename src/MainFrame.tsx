import { AppShell, Drawer, Header, Footer } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";

export function MainFrame() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          {<Navbar />}
        </Header>
      }
      footer={
        <Footer height={80} p="xs">
          {<AppFooter />}
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

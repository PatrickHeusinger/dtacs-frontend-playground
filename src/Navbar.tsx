import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from './dt_logo2.png';

import {
  createStyles,
  Header,
  Container,
  Anchor,
  Group,
  Image
  
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { userLink, mainLinks } from "./constants";

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: '100px',
    paddingRight: '100px',
    width:'100%'
  },

  // inner: {
  //   height: HEADER_HEIGHT,
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: "uppercase",
    fontSize: 13,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    borderBottom: "2px solid transparent",
    transition: "border-color 100ms ease, color 100ms ease",

    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      textDecoration: "none",
    },
  },

  secondaryLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
    textTransform: "uppercase",
    transition: "color 100ms ease",

    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottomColor: '#1883AD'
     // theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],
  },
}));

export function Navbar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const location = useLocation();

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      component={Link}
      to={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: location.pathname === item.link,
      })}
      onClick={(event) => {
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  

  return (
    <Header className={classes.header} height={HEADER_HEIGHT}  mb={120}>
       <Image width={200} src={Logo} />
      <div className={classes.links}>
         <Group position="right"> {/* placeholder*/}</Group> 
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
    </Header>
  );
}

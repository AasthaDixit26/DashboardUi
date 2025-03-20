import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
// import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 94;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  height: "750px",
  backgroundColor:'#000 !important',
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const icons = ["sidebar1.svg", "sidebar2.svg", "sidebar3.svg", "sidebar4.svg"];

const Sidebar = () => {
  return (
    <>
      <Drawer variant="permanent" sx={{
    backgroundColor: '#000',
    '& .MuiDrawer-paper': {
      backgroundColor: '#000',
      color: 'white',
      border: 'none'
    }
  }}>
        <DrawerHeader  sx={{
  backgroundColor:'black',}}></DrawerHeader>
        {/* <Divider /> */}
        <List sx={{
  backgroundColor:'black',}}>
          {["Icon1", "Icon2", "Icon3", "Icon4"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block",top:'59px' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: "center",
                    marginBottom:'30px'
                  },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      mr: "auto",
                      gap:'12px',
                      alignContent:'center'
                    },
                  ]}
                >
                  <img src={icons[index]} alt={`icon-${index}`} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
    </>
  );
};

export default Sidebar;

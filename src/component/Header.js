import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Sidebar from "./sidebar";
import { Box, IconButton, Badge, Avatar, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "300px",
  marginLeft: '-24px',
  display: "flex",
  alignItems: "center",
  verticalAlign: "left",
  paddingLeft: theme.spacing(1),
  height: "40px",
  left: "-281px",
  top: "1px",
  bottom: "1px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#7A7A7A",
  marginRight: theme.spacing(1),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    width: "100%",
  },
}));

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0px",
        backgroundColor: "#000",
        color: "#fff",
        height: "100px",
      }}
    >
      <Box >
        <Sidebar />
      </Box>

      <Search>

        <StyledInputBase
          sx={{
            fontFamily: "Inter",
            weight: 400,
            fontSize: "12px",
            verticalAlign: "middle",
            marginTop: 1,
            marginLeft: '16px',marginBottom:'4px'
          }}
          placeholder="Search type of keywords"
          inputProps={{ "aria-label": "search" }}
        />

<SearchIconWrapper>
          <img src="search-normal.svg" alt="search" />
        </SearchIconWrapper>
      </Search>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            backgroundColor: "#222",
            borderRadius: "12px",
            width: "40px",
            height: "40px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          <img src="help.svg" alt="Help" width="20" height="20" />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            backgroundColor: "#222",
            borderRadius: "12px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          
            <img
              src="notification.svg"
              alt="Notification"
              width="20"
              height="20"
            />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1,marginRight:' 20px' }}>
          <Avatar src="/path-to-profile-pic.jpg" alt="Profile" />
          <Typography variant="body1">Rohan</Typography>
          <ExpandMoreIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

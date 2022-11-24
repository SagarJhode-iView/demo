import React, { useState } from "react";
import Logo from "../../Assets/Logo.jsx";
import "./index.css";
import { Typography, Box, Menu, MenuItem, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header">
      <Box className="logo-container">
        <Logo width={32} height={32} />
        <Typography className="header-text" fontWeight={700}>
          airbnb
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 2rem",
          borderRadius: "10rem",
          maxWidth: "35rem",
          boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
        }}
      >
        <Typography className="mid-section-text" sx={{ marginInline: "1rem" }}>
          Anywhere
        </Typography>
        <Typography className="mid-section-text" sx={{ marginInline: "1rem" }}>
          Week in Dec, Jan, Feb...
        </Typography>
        <Typography>Add Guests</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FF385C",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            fontSize: "1rem",
            marginLeft: "1rem",
          }}
        >
          <SearchIcon
            sx={{ color: "#fff", fontSize: "1rem", fontWeight: "700" }}
          />
        </Box>
      </Box>
      <Box className="end-section">
        <Typography>Airbnb your home</Typography>
        <LanguageIcon />
        <Toolbar>
          <Box className="profile-section" onClick={handleMenu}>
            <MenuIcon />
            <AccountCircleRoundedIcon />
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Header;

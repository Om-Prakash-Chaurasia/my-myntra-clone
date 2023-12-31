import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import WishListIcon from "@mui/icons-material/Favorite";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartReducer.carts);
  const [showBigImageForMen, setShowBigImageForMen] = useState(false);
  const [showBigImageForWomen, setShowBigImageForWomen] = useState(false);
  const [showBigImageForKids, setShowBigImageForKids] = useState(false);
  const [showBigImageforHome, setShowBigImageForHome] = useState(false);
  const [showBigImageForBeauty, setShowBigImageForBeauty] = useState(false);
  const [showBigImageForStudio, setShowBigImageForStudio] = useState(false);

  //   Function to determine the icon and text color based on the background color.
  const getIconAndTextColor = (backgroundColor) => {
    const isDarkBackground = theme.palette.mode === "dark";
    const iconColor = isDarkBackground ? theme.palette.text.primary : "#000000";
    const textColor = isDarkBackground
      ? theme.palette.text.primary
      : theme.palette.text.secondary;

    return {
      iconColor,
      textColor,
    };
  };

  //  Get the icon and text color based on the background color.
  const { iconColor, textColor } = getIconAndTextColor(
    theme.palette.primary.main
  );

  // Function to handle mouse click on the button.
  const handleMouseEnterMen = () => {
    setShowBigImageForMen(true);
  };

  const handleMouseEnterWomen = () => {
    setShowBigImageForWomen(true);
  };

  const handleMouseEnterKids = () => {
    setShowBigImageForKids(true);
  };

  const handleMouseEnterHome = () => {
    setShowBigImageForHome(true);
  };

  const handleMouseEnterBeauty = () => {
    setShowBigImageForBeauty(true);
  };

  const handleMouseEnterStudio = () => {
    setShowBigImageForStudio(true);
  };

  // Function to handle mouse leave from the button.
  const handleMouseLeaveMen = () => {
    setShowBigImageForMen(false);
  };

  const handleMouseLeaveWomen = () => {
    setShowBigImageForWomen(false);
  };

  const handleMouseLeaveKids = () => {
    setShowBigImageForKids(false);
  };

  const handleMouseLeaveHome = () => {
    setShowBigImageForHome(false);
  };

  const handleMouseLeaveBeauty = () => {
    setShowBigImageForBeauty(false);
  };

  const handleMouseLeaveStudio = () => {
    setShowBigImageForStudio(false);
  };

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: "#f0f0f0", height: "65px" }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon style={{ color: iconColor }} />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, color: textColor }}>
              <img
                src="https://tse3.explicit.bing.net/th?id=OIP.QWUAETWj7eqbEhMAqdNl2gHaFW&pid=Api&P=0&h=180"
                alt="Logo"
                style={{ height: 50, cursor: "pointer", margin: "5px" }}
                onClick={() => navigate("/")}
              />
            </Typography>
            <IconButton color="inherit">
              <SearchIcon style={{ color: iconColor }} />
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              <CartIcon style={{ color: iconColor, marginRight: "8px" }} />
              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "4px",
                    fontSize: "10px",
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </IconButton>
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: textColor, marginRight: "auto" }}
            >
              <img
                src="https://tse3.explicit.bing.net/th?id=OIP.QWUAETWj7eqbEhMAqdNl2gHaFW&pid=Api&P=0&h=180"
                alt="Logo"
                style={{ height: 40, cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                style={{
                  color: textColor,
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnterMen}
                onMouseLeave={handleMouseLeaveMen}
                onClick={() => navigate("/filter")}
              >
                Men
              </Button>
              <Button
                color="inherit"
                style={{
                  color: textColor,
                  marginRight: "8px",
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnterWomen}
                onMouseLeave={handleMouseLeaveWomen}
                onClick={() => navigate("/filter")}
              >
                Women
              </Button>
              <Button
                color="inherit"
                style={{
                  color: textColor,
                  marginRight: "8px",
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnterKids}
                onMouseLeave={handleMouseLeaveKids}
                onClick={() => navigate("/filter")}
              >
                Kids
              </Button>
              <Button
                color="inherit"
                style={{
                  color: textColor,
                  marginRight: "8px",
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnterHome}
                onMouseLeave={handleMouseLeaveHome}
                onClick={() => navigate("/filter")}
              >
                Home & Living
              </Button>
              <Button
                color="inherit"
                style={{
                  color: textColor,
                  marginRight: "8px",
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnterBeauty}
                onMouseLeave={handleMouseLeaveBeauty}
                onClick={() => navigate("/filter")}
              >
                Beauty
              </Button>
              <Button
                color="inherit"
                style={{
                  color: textColor,
                  marginRight: "250px",
                  fontWeight: "bold",
                }}
                onMouseEnter={handleMouseEnterStudio}
                onMouseLeave={handleMouseLeaveStudio}
                onClick={() => navigate("/filter")}
              >
                Studio
                <span
                  style={{
                    position: "absolute",
                    top: "3px",
                    right: "-17px",
                    color: "red",
                    padding: "4px",
                    fontSize: "8px",
                  }}
                >
                  NEW
                </span>
              </Button>

              {/* Add SearchBar component here */}
              <div style={{ marginRight: "25px" }}>
                <SearchBar />
              </div>

              <div style={{ flexGrow: 1 }} />

              <IconButton color="inherit">
                <ProfileIcon
                  style={{
                    color: iconColor,
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                />
              </IconButton>
              <IconButton color="inherit">
                <WishListIcon
                  style={{
                    color: iconColor,
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                />
              </IconButton>
              <IconButton color="inherit" onClick={() => navigate("/cart")}>
                <CartIcon
                  style={{
                    color: iconColor,
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                />
                {cartItems.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "10px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "4px",
                      fontSize: "10px",
                    }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </IconButton>
            </div>
          </>
        )}
      </Toolbar>
      <Box zIndex={1} position="relative">
        {showBigImageForMen && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="../../images/men.png"
              alt="Big Image"
              style={{ width: "1200px", height: "400px" }}
            />
          </div>
        )}
        {showBigImageForWomen && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="../../images/women.png"
              alt="Big Image"
              style={{ width: "1200px", height: "400px" }}
            />
          </div>
        )}
        {showBigImageForKids && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="../../images/kids.png"
              alt="Big Image"
              style={{ width: "1200px", height: "400px" }}
            />
          </div>
        )}
        {showBigImageforHome && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="../../images/home.png"
              alt="Big Image"
              style={{ width: "1200px", height: "400px" }}
            />
          </div>
        )}
        {showBigImageForBeauty && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="../../images/women.png"
              alt="Big Image"
              style={{ width: "1200px", height: "400px" }}
            />
          </div>
        )}
        {showBigImageForStudio && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="../../images/studio.png"
              alt="Big Image"
              style={{ width: "1200px", height: "400px" }}
            />
          </div>
        )}
      </Box>
    </AppBar>
  );
};

export default NavBar;

import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
  withStyles,
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";

//to add css to material ui components
const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  logo: {
    width: 75,
  },
  container: {
    display: "flex",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  subURL: {
    width: 10,
    height: 10,
    marginLeft: 4,
  },
}));

//to override css of material ui components
const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

export default function Header() {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <Box className={classes.component}>
          <img src={logoURL} className={classes.logo} alt="logoURL" />
          <Box component="span" className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} className={classes.subURL} alt="subURL" />
          </Box>
        </Box>
        <SearchBar />
        <HeaderButtons />
      </ToolBar>
    </AppBar>
  );
}

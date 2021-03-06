import { makeStyles, Box, Typography, Badge, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginDialog from "../Login/LoginDialog";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyle = makeStyles({
  container: {
    display: "flex",
  },
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: 12,
      alignItems: "center",
    },
  },
  login: {
    color: "#2874f0",
    background: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
  },
});

const HeaderButtons = () => {
  const classes = useStyle();
  const { account, setAccount } = useContext(LoginContext);

  //to open/close login dialogbox
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
    {account ? (<Profile account={account} setAccount={setAccount} />
      ) : (
        
          <Button
            className={classes.login}
            variant="contained"
            onClick={() => openDialog()}
          >
            Login
          </Button>
        
      )}
      <Link>
        <Typography style={{ marginTop: 2 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButtons;

import { makeStyles, Box, Typography, Badge, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

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

  return (
    <Box className={classes.wrapper}>
      <Link><Button className={classes.login} variant="contained">
      Login
    </Button></Link>
      <Link><Typography style={{ marginTop: 2 }}>More</Typography></Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
    </Box>
  );
};

export default HeaderButtons;

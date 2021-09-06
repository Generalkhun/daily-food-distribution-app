import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";

interface Props {}

const useStyles = makeStyles({
  logoutButton: {
    //   display:'flex',
    //   flexGrow:1,
    //   flexBasis:''
    marginLeft: "auto"
  },
});
const NavBar = (props: Props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ส่งข้าวเข้าบ้าน</Typography>
        <Button color="inherit" className={classes.logoutButton}>
          ออกจากระบบ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
function makeStyle(arg0: { logoutButton: {} }) {
  throw new Error("Function not implemented.");
}

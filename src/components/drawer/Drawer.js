import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { store, useGlobalState } from "state-pool";
import Button from "@material-ui/core/Button";
import ProjectRoutes from "../../routes";
import "./Drawer.css";
import App from '../../App';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  // root styles
  root: {
    display: "flex",
  },

  // drawer styles
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // App bar styles
  appBar: {
    // TODO: To remove
    // [theme.breakpoints.up("md")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    boxShadow: "none",
  },

  // menu button styles
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  // Drawer Area styles
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#55BFB9",
    border: "none",
    marginTop: "64px",
  },

  //  Content styles
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function DrawerLeft(props,{logout}) {
  const [logedin, setLogedin] = useGlobalState("logedIn");
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  // const handleLogout = () =>{
  //  logout();
  // }


  // Drawer -------------------------------------------------------------------
  const drawer = (
    <div className="back-color">
      {/* <div className={classes.toolbar} /> */}
      <List className="back-color">
        {/* Home Button */}
        <Link to="/home" className="drawer-link">
          <ListItem button className="drawer-button">
            <ListItemIcon>
              <HomeIcon className="drawer-icon" />
            </ListItemIcon>

            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Divider />

        {/* Profile Button */}
        <Link to="/profile" className="drawer-link">
          <ListItem button className="drawer-button">
            <ListItemIcon>
              <PersonIcon className="drawer-icon" />
            </ListItemIcon>

            <ListItemText primary={"Profile"} />
          </ListItem>
        </Link>
        <Divider />

        {/* Notices Button */}
        <Link to="/notices" className="drawer-link" >
          <ListItem button className="drawer-button" >
            <ListItemIcon>
              <DashboardIcon className="drawer-icon" />
            </ListItemIcon>

            <ListItemText primary={"Notices"}/>
          </ListItem>
        </Link>
        <Divider />

        {/* Contol Panel Button */}
        <Link to="/control-panel" className="drawer-link">
          <ListItem button className="drawer-button">
            <ListItemIcon>
              <SettingsIcon className="drawer-icon" />
            </ListItemIcon>

            <ListItemText primary={"Control Panel"} />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // return method ------------------------------------------------------------------------
  return (
    <div className={classes.root}>
      {/* --- AppBar --- */}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="back-color">
          {logedin === true ? (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon className="menuButton" />
            </IconButton>
          ) : (
            <div />
          )}

          <Typography noWrap className="title" style={{fontWeight:"bold"}}>
            Batch Meet
          </Typography>

          {logedin === true ? (
              <div>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <PersonIcon />
            </IconButton>
                <Button color="inherit"
                        style={{backgroundColor:"",fontWeight:"bold",color:"white" ,marginRight:"5px",}}
                        onClick={props.logout}>
                    Log Out</Button>


              </div>


          ) : (
            <div>
              <Link to="/login" className="drawer-link">
                <Button color="inherit" style={{backgroundColor:"",fontWeight:"bold",color:"white" ,marginRight:"5px",}}>
                  Log In</Button>
              </Link>

              <Link to="/signup" className="drawer-link">
                <Button color="inherit" style={{backgroundColor:"#000",fontWeight:"bold",color:"white" }}>Sign Up</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {logedin === true ? (
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          {/* --- mobile and tab view drawer --- */}
          <Hidden mdUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

          {/* --- web view drawer --- */}
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      ) : (
        <div />
      )}

      {/* --- web pages content area --- */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ProjectRoutes />
      </main>
    </div>
  );
}

DrawerLeft.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



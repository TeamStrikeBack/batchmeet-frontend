import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { store, useGlobalState } from "state-pool";

export default function Singin() {
  const [logedin, setLogedin] = useGlobalState("logedIn");
  const paperStyles = {
    padding: 20,
    height: "70vh",
    maxWidth: 400,
    margin: "20px auto",
  };
  const preventDefault = (event) => event.preventDefault();

  const setLoggedIn = () => {
    setLogedin(true);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyles}>
        <Grid align="center">
          <Avatar>H</Avatar>
          <h1>Loging </h1>
          <TextField id="standard-basic" label="User Name" fullWidth />

          <TextField id="standard-basic" label="Passworad" fullWidth />
        </Grid>

        <Grid container justify="center">
          <Link to="/home">
            <Button
              variant="contained"
              style={{ margin: "10px 0" }}
              color="primary"
              align="center"
              onClick={setLoggedIn}
            >
              Login
            </Button>
          </Link>
        </Grid>
        {/* <Link href='#' onClick={preventDefault}>
          Forget Password?
        </Link> */}
      </Paper>
    </Grid>
  );
}

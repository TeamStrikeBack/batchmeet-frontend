import  React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { store, useGlobalState } from "state-pool";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="http://localhost:3000/" color="inherit" >
        Batch Meet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#55BFB9',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const theme = createTheme(themeOptions);

export default function Login() {
  const [logedin, setLogedin] = useGlobalState("logedIn");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const preventDefault = (event) => event.preventDefault();
  const setLoggedIn = () => {
    console.log(logedin);
    setLogedin(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#011238' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
             
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
              autoFocus
              
            />
            <TextField
              margin="normal"
             
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="email"
              
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{color:"#55BFB9"}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              
              style={{color:"#55BFB9"}}
            />
            
            <Link to="/login" style={{textDecoration:"none"}}>
            <Button
              fullWidth
              variant="contained"
              style={{backgroundColor:"#55BFB9",fontWeight:"bold",color:"white",marginBottom:"25px"}}
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign Up
            </Button>
            </Link>
            <Grid container style={{fontFamily:"Verdana",fontSize:"14px"}}>
              
              <Grid item  >
                <Link to="/login" variant="inherit"  >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { store, useGlobalState } from "state-pool";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit"  to="http://localhost:3000/">
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

export default function Login(props) {


  const [logedin, setLogedin] = useGlobalState("logedIn");

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // const preventDefault = (event) => event.preventDefault();

  const setLoggedIn = (e) => {

    //e.preventDefault();

    const obj = {email,password}

    axios.post(`${process.env.REACT_APP_BASE_URL}/auth`,obj)
       .then((res)=>{
         console.log(res.data);
         localStorage["token"] = res.data.token;
         setLogedin(true);
         props.history.push('/home');
       })
       .catch((err)=>{
         props.history.push('/login');
         console.error(err);
       })

    //console.log(logedin);
    // setLogedin(true);
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
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              autoComplete="username"

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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
              style={{color:"#55BFB9"}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" style={{color:"#55BFB9"}} />}
              label="Remember me"
            />
            <Link to="/home" style={{textDecoration:"none"}}>
            <Button
              fullWidth
              variant="contained"
              style={{backgroundColor:"#55BFB9",fontWeight:"bold",color:"white", marginBottom:"25px"}}
              sx={{ mt: 3, mb: 2 }}
              onClick={setLoggedIn}
            >
              Sign In
            </Button>
            </Link>
            <Grid container  style={{fontFamily:"Verdana",fontSize:"14px"}}>
              <Grid item xs>
                <Link to="/passwordreset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="inherit">
                  {"Don't have an account? Sign Up"}
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

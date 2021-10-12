import React from "react";
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

export default function forgotpassword() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          Forgot your password?
          </Typography>
          <Typography component="p" variant="p" sx={{ mt: 2}} align='center'>
          Enter you email address and We'll send you a link to reset password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }} >
          
         
          
            <TextField
              margin="normal"
             
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              
              autoFocus
              
            />
           
            
            <Link to="/resetlink" style={{textDecoration:"none"}}>
            <Button
              fullWidth
              variant="contained"
              style={{backgroundColor:"#55BFB9",fontWeight:"bold",color:"white", marginBottom:"25px"}}
              sx={{ mt: 3, mb: 2 }}
             
            >
              Reset
            </Button>
            </Link>
            
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
     
    </ThemeProvider>
    
  );
}
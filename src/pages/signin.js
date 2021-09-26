import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function Login() {
  const paperStyles = {
    padding: 20,
    height: '70vh',
    maxWidth: 400,
    margin: '20px auto',
  };
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid>
      <Paper elevation={10} style={paperStyles}>
        <Grid align='center'>
          <Avatar>H</Avatar>
          <h1>Sign in </h1>
          <TextField id='standard-basic' label='User Name' fullWidth />

          <TextField id='standard-basic' label='Email' fullWidth />
          <TextField id='standard-basic' label='Email' fullWidth />
          <TextField id='standard-basic' label='Email' fullWidth />
        </Grid>

        <Grid container justify='center'>
          <Button
            variant='contained'
            style={{ margin: '10px 0' }}
            color='primary'
            align='center'
          >
            Sign in
          </Button>
        </Grid>
        {/* <Link href='#' onClick={preventDefault}>
          Forget Password?
        </Link> */}
      </Paper>
    </Grid>
  );
}

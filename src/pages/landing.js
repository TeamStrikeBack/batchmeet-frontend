import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function landing() {
  return (
    <div>
      landing page
      <Link to='/login' className='drawer-link'>
        <Button color='inherit'>Login</Button>
      </Link>
      <Link to='/signin' className='drawer-link'>
        <Button color='inherit'>Sign in</Button>
      </Link>
    </div>
  );
}

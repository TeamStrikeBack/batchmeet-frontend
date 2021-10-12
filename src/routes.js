import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Notices from './pages/notices';
import EditProfile from './pages/editProfile';
import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import forgotpassword from './pages/forgotpassword';
import resetlink from './pages/resetlink';
import resetpassword from './pages/resetpassword';

class ProjectRoutes extends React.Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Landing}></Route>
        <Switch>
        <Route exact path='/home' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
         
          <Route exact path='/profile' component={Profile}></Route>
          <Route exact path='/notices' component={Notices}></Route>
          <Route exact path='/edit-profile' component={EditProfile}></Route>
          <Route exact path='/passwordreset' component={forgotpassword}></Route>
          <Route exact path='/resetlink' component={resetlink}></Route>
          <Route exact path='/resetpassword' component={resetpassword}></Route>
        </Switch>
      </>
    );
  }
}

export default ProjectRoutes;

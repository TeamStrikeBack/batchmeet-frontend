import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Notices from './pages/notices';
import EditProfile from './pages/editProfile';
import Landing from './pages/landing';
import Login from './pages/login';
import Signin from './pages/signin';

class ProjectRoutes extends React.Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Landing}></Route>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signin' component={Signin}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/profile' component={Profile}></Route>
          <Route exact path='/notices' component={Notices}></Route>
          <Route exact path='/edit-profile' component={EditProfile}></Route>
        </Switch>
      </>
    );
  }
}

export default ProjectRoutes;

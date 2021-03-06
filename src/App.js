import './App.css';
import  Home  from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RequestRide from './Components/RequestRide/RequestRide';
import Appbar from './Components/Navbar/Appbar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  console.log(loggedInUser)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Appbar></Appbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/transportation/:vehicle">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/ride">
            <RequestRide></RequestRide>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

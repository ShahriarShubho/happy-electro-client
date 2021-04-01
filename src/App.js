import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import CheckOut from "./components/CheckOut/CheckOut";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";


export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/logIn">
            <LogIn/>
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute path="/product/:id">
            <CheckOut/>
          </PrivateRoute>
          <Route  path="*">
           <NotFound/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import CheckOut from "./components/CheckOut/CheckOut";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";

export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route exact path="/">
           <HomePage/>
          </Route>
          <PrivateRoute path="/product/:id">
            <CheckOut />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

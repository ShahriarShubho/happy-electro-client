import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "./Admin.css";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import { Plus, PencilSquare, Grid } from 'react-bootstrap-icons';

const Admin = () => {
  
  const { path, url } = useRouteMatch();

  return (
    <div className="row bg-color">
      <div className=" col-md-3 admin-style">
        <ul>
          <li>
            <Link
              className="text-white text-decoration-none"
              to={`${url}/manageProduct`}
            >
              <Grid className="ml-2" color="white" size={22} /> Manage Product
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-decoration-none"
              to={`${url}/addProduct`}
            >
             <Plus color="white" size={35} />Add Product
            </Link>
          </li>
          <li>
            <Link className="text-white text-decoration-none" to={`#`}>
             <PencilSquare className="ml-2" color="white" size={21} /> Edit Product
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-md-8 ml-5">
        <Switch>
          <Route exact path={path}>
            <ManageProduct />
          </Route>
          <Route path={`${path}/manageProduct`}>
            <ManageProduct />
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;

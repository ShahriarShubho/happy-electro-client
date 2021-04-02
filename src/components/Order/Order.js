import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import './Order.css'

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const[loadingSpinner, setLoadingSpinner] = useState(true)
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      "https://pumpkin-sundae-84698.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadingSpinner(false)
      });
  }, []);
  return (
    <section className="orderSection">
    <div className="container">

      <h4 className="pt-4">Hi, {loggedInUser.name}</h4>
      <h5>Your Email: {loggedInUser.email}</h5>
    { loadingSpinner ? (
      <div className="mt-5 text-center">
      <button className="btn btn-primary" type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
  </div>):

     (<div className="text-center m-3 bg-white">
        <h3>Your total order is : {orders?.length}</h3>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Shipment Address</th>
              <th>Phone Number</th>
              <th>Order Date</th>
            </tr>
          </thead>

          {orders?.map((order) => (
            <tbody>
              <tr>
                <td>{order.productInfo.name}</td>
                <td>1</td>
                <td>${order.productInfo.price}</td>
                <td>{order.shipment.address}</td>
                <td>{order.shipment.mobile}</td>
                <td>
                  {new Date(order.orderTime).toDateString(
                    "dd/mm/yyyy HH:mm:ss"
                  )}
                </td>
              </tr>
            </tbody>
          ))}

        </Table>
      </div>)}
    </div>
    </section>
  );
};

export default Order;

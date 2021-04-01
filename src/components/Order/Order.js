import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState()
    useEffect(() => {

        fetch('https://pumpkin-sundae-84698.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setOrders(data)})
    }, [])
    return (
        <div className="container">
        <h4>Hi: {loggedInUser.name}</h4>
        <h5>Your Email: {loggedInUser.email}</h5>
<div className="text-center">
<h3>Your total order is : {orders?.length}</h3>
<Table striped bordered hover size="sm">
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
              <td>{(new Date(order.orderTime)).toDateString('dd/mm/yyyy HH:mm:ss')}</td>
            </tr>  
          </tbody>   ))}
</Table>
    </div>
        </div>
    );
};

export default Order;
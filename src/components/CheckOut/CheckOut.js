import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
import swal from 'sweetalert'

const CheckOut = () => {

  const [loggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  //this is for read all product
  useEffect(() => {
    fetch("https://pumpkin-sundae-84698.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const product = products.find((pd) => pd._id === id);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const orderDetails = {
      ...loggedInUser,
      productInfo: product,
      shipment: data,
      orderTime: new Date(),
    };

    fetch("https://pumpkin-sundae-84698.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Well Done!", "Your Order is successful!", "success");
          document.getElementById("name").value = ""
          document.getElementById("email").value = ""
          document.getElementById("address").value = ""
          document.getElementById("mobile").value = ""
        }
      });
  };

  return (
    <div className="container mt-5">
      <Table className="text-center" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>{product?.name}</td>
            <td>1</td>
            <td>${product?.price}</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>${product?.price}</td>
          </tr>
        </tbody>
      </Table>

      <div className="container w-50">
        <form onSubmit={handleSubmit(onSubmit)}>

          <strong className="mt-3">Your Name : </strong>
          <br />
          <input
            name="name"
            id="name"
            className="rounded border-success w-100 "
            placeholder="Enter your name"
            defaultValue={loggedInUser.name}
            ref={register({ required: true })}
          />{" "}
          <br />
          {errors.name && (
            <span className="text-danger">Name field is required</span>
          )}
          <br />

          <strong className="mt-3">Your Email : </strong>
          <br />
          <input
            name="email"
            id="email"
            className="rounded border-success w-100"
            placeholder="Enter your email"
            defaultValue={loggedInUser.email}
            ref={register({ required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-danger">email field is required</span>
          )}
          <br />

          <strong className="mt-3">Your Address : </strong>
          <br />
          <input
            name="address"
            id="address"
            className="rounded border-success w-100"
            placeholder="Enter Your Address"
            ref={register({ required: true })}
          />
          <br />
          {errors.address && (
            <span className="text-danger">Address field is required</span>
          )}
          <br />

          <strong className="mt-3">Your Phone Number:</strong>
          <br />
          <input
            name="mobile"
            type="number"
            id="mobile"
            className="rounded border-success w-100"
            placeholder="Enter Your Phone Number"
            ref={register({ required: true })}
          />
          <br />
          {errors.mobile && (
            <span className="text-danger">Add a phone number</span>
          )}
          <br />

          <button className="btn btn-success mb-5 mr-5" type="submit">
            Check Out Order
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

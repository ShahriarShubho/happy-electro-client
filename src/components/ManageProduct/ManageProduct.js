import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";

const ManageProduct = () => {
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://pumpkin-sundae-84698.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [products]);
  
    const handleDelete = (id) => {
     
        fetch(`https://pumpkin-sundae-84698.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
              swal("Good job!", "Delete successful", "success");
            }
        });
  
    }
    return (
      <div>
          <h2 className="text-center p-3">Manage product</h2>
        <Table responsive="sm" className="text-center" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          
          {products.map((pd) => (
          <tbody>
            <tr>
              <td>{pd?.name}</td>
              <td>1</td>
              <td>{pd?.price}</td>
              <td><button className="btn btn-warning" onClick={() => handleDelete(pd._id)}>DELETE</button></td>
            </tr>  
          </tbody>   ))}
        </Table>
      </div>
    );
};

export default ManageProduct;
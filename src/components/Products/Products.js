import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { name, price, img, _id} = props.product;
  return (
    <div className="col-md-4">
      <Card style={{ width: "15rem", margin: "20px", padding: "10px"}}>
        <Card.Img style={{width: "100%", height: "220px"}} variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="d-flex justify-content-between">
            <p>Price : ${price}</p>
          <Button as={Link} to={"/product/"+_id} variant="primary">Buy Now</Button> 
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;

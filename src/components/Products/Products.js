import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
import { CartPlus } from "react-bootstrap-icons";

const Products = (props) => {
  const { name, price, img, _id } = props.product;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-5 cardResponsive">
      <Card className="cardStyle" style={{ width: "15rem", padding: "10px" }}>
        <Card.Img
          style={{ width: "100%", height: "220px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="d-flex justify-content-between">
            <strong className="mr-1 text-primary">Price: ${price}</strong>
            <Button
              as={Link}
              to={"/product/" +_id}
              className="btn-sm"
              variant="primary"
            >
              <CartPlus color="white" size={21} />
              Buy Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;

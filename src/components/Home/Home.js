import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import './Home.css'

const Home = () => {
  // const [products, setProducts] = useContext(UserContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pumpkin-sundae-84698.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="homeSection">
      <div className="container">
          <div className="row">
            {
              products.length === 0 && 
                <div className="spinnerStyle  m-auto">
                <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
                </div>
            }
        {products.map((pd) => (
          <Products product={pd} key={pd._id}></Products>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Home;

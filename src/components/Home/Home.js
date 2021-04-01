import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    // const [products, setProducts] = useContext(UserContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://pumpkin-sundae-84698.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  
    console.log(products)
    return (
        <div className="row">
        {
            products.map(pd => <Products product={pd} key={pd._id}></Products>)
        }

        </div>
    );
};

export default Home;
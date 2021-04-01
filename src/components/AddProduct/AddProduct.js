import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const [imgURL, setImgURl] = useState(null)
    const { register, handleSubmit, errors } = useForm();

    //handle add product
    const onSubmit = data => {
        const eventData = {
            name : data.name,
            price : data.price,
            quantity : 1,
            img : imgURL
        }

        fetch('https://pumpkin-sundae-84698.herokuapp.com/addProducts', { 
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert("Product successfully added")
          }
        })
    }

    //handle image upload imgbb api and database 
    const handleImg = (event) =>{

        const imageData = new FormData()
        imageData.set('key', '07945127d96230e24a48010e87b1a758');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImgURl(response.data.data.display_url);
          })
          .catch(function (error) {
            alert(error);
          });
}
    
    return (
      <>
      <h2 className="text-center p-3">Add product</h2>
        <div className="bg-white w-50 m-auto px-5 py-3 shadow-lg rounded-lg">

      <form onSubmit={handleSubmit(onSubmit)}>

        <strong>Add Product Name</strong><br/>
      <input name="name" placeholder="Enter Product Name" className="rounded border-primary w-100 mb-3" ref={register({ required: true })} /> <br/>
      {errors.name && <span className="text-danger">Name field is required</span>}

        <strong>Add Price</strong><br/>
      <input name="price" placeholder="Enter Product Price" className="rounded border-primary mb-3 w-100" ref={register({ required: true })} /> <br/> 
      {errors.price && <span className="text-danger">Must add a price</span>}
  
      <strong>Upload  Product Image</strong><br/>
        <input type="file" name="photos" onChange={handleImg}/><br/>
        {errors.photos && <span className="text-danger">Please uploaded a photos</span>} <br/>

      <button type="submit" className="btn btn-primary w-50">Save</button>
    </form>
        </div>
        </>
    );
};

export default AddProduct;
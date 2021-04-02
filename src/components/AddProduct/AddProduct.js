import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert'

const AddProduct = () => {

  const [imgURL, setImgURl] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  //handle add product
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      quantity: 1,
      img: imgURL,
    };

    fetch("https://pumpkin-sundae-84698.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {

          swal("Good job!", "Product successfully added!", "success");
          document.getElementById("name").value = "";
          document.getElementById("price").value = "";
          document.getElementById("photo").value = null;
        }
      });
  };

  //handle image upload imgbb api and database
  const handleImg = (event) => {
    const imageData = new FormData();
    imageData.set("key", "07945127d96230e24a48010e87b1a758");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImgURl(response.data.data.display_url);
      })
      .catch(function (error) {
        swal("Opppsss!", `${error}`, "error");
      });
  };

  return (
    <>
      <h2 className="text-center p-3">Add product</h2>
      <div className="bg-white m-auto px-5 py-3 shadow-lg rounded-lg border-lg">

        <form onSubmit={handleSubmit(onSubmit)}>

          <strong className="mt-3">Add Product Name</strong>
          <br />
          <input
            name="name"
            id="name"
            placeholder="Enter Product Name"
            className="rounded border-primary w-50"
            ref={register({ required: true })}
          />{" "}
          <br />
          {errors.name && (
            <span className="text-danger">Name field is required</span>
          )} <br/>

          <strong className="mt-3">Add Price</strong>
          <br />
          <input
            name="price"
            type="number"
            id="price"
            placeholder="Enter Product Price"
            className="rounded border-primary w-50"
            ref={register({ required: true })}
          />{" "}
          {errors.price && (
            <span className="text-danger">Must add a price</span>
          )} <br/>

          <strong className="mt-3">Upload Product Image</strong>
          <br />
          <input type="file" id="photo" className='w-100' name="photos" onChange={handleImg} />
          {errors.photos && (
            <span className="text-danger">Please uploaded a photos</span>
          )}{" "}
          <br />

          <button type="submit" className="btn btn-primary mt-3">Save</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

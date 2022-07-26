import React, { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  // we can do like this... if we don't change value
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {};
  const onChange = () => {};

  return (
    <>
      <section className="heading">
        <h1> Create a new Ticket </h1>
        <p> Please fill out the form bellow</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name"> Customer Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onChange}
            // disabled
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="name"> Customer email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            disabled
          ></input>
          <form onSubmit={onSubmit}>
            <label htmlFor="product"> Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone" onChange={onChange}>
                iPhone
              </option>
              <option value="Macbook Pro" onChange={onChange}>
                Macbook Pro{" "}
              </option>
              <option value="iMac" onChange={onChange}>
                iMac
              </option>
            </select>
          </form>
          <div className="form-group">
            <label htmlFor="description"> Description of the issue</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              Description of the issue
            </textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewTicket;

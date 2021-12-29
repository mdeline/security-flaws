import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

function Subscribe() {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = handleSubmit(
    data => {
      console.log(data);
      axios.post("http://localhost:8080/subscribers/add", data);
      setMessage(`Thank you for subscribing.`);
      reset();
    });
  return (
    <div>
    <h2>Subscribe to newsletter</h2>
   
    <form onSubmit={onSubmit}>
      <label>Name</label> <br />
      <input type="text" {...register("name", { required: true})} /> <br />
      <label>E-mail</label> <br />
      <input type="text" {...register("email", {required: true})} /> <br />
      <button type="submit">Submit</button>
    </form>

    <h3>
      { message }
    </h3>

    </div>
  );
}

export default Subscribe

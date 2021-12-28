import * as React from "react";
import { useForm, Controller } from "react-hook-form";

function Subscribe() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(data => console.log(data));
  return (
    <div>
    <h2>Subscribe to our newsletter</h2>
    <form onSubmit={onSubmit}>
      <label>Name</label> <br />
      <input type="text" {...register("name", { required: true})} /> <br />
      <label>E-mail</label> <br />
      <input type="email" {...register("email", {required: true})} /> <br />
      <button type="submit">Submit</button>

    </form>
    </div>
  );
}


export default Subscribe

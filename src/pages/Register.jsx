import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target[0])
  }
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit = {handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
         
        </form>
        <p>
        You do have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
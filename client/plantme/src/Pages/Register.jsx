import React from "react";

const Register = () => {
  
  const handleRegister =() => {
    console.log('Register Clicked!');
    
  }
  return (
    <>
      <div className="container mx-auto w-4xl justify-center items-center m-10">
        <p>Hello Visitor! Please Register!!</p>
        <form>
          <input type="text" name="name"  />
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button onSubmit={handleRegister()} className="btn btn-primary">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;

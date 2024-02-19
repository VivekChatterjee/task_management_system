import React, { useState } from "react";
import { loginCall } from "../login-actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginNow = () => {
    console.log("user ", username);
    console.log("pass ", password);
    loginCall({
      username: username,
      password: password,
    });
  };
  return (
    <>
      <div>Login to your Account</div>
      <input
        type="text"
        name="Username"
        id=""
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        name="Password"
        id=""
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button type="button" onClick={loginNow}>
        Login
      </button>
    </>
  );
};

export default Login;

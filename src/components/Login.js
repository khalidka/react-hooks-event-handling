/*
 onSubmit

Whenever you're working with <form> elements, handling the submit event is a good way to interact with all the data from the form after it's been submitted.

Here's a quick example: */

import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("I submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;

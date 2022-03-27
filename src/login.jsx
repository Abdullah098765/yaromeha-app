import React from "react";
import { useState } from 'react';
import { useEffect } from "react";



function Login() {

  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')


  var myHeaders = new Headers();
  myHeaders.append("as", "sasas");
  myHeaders.append("Content-Type", "application/json");


  function handlechange(event) {

    if (event.target.name === 'email') {
      setEmail(event.target.value)
      console.log(email);


    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value)
      console.log(password);


    }



  }

  function login() {

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3003/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        if (result !== 'Enter Currect Email'){
          window.location = 'http://localhost:3000/dashboard'
        }
        else(alert(result))
      })
      .catch(error => console.log('error', error));


    setEmail('')
    setPassword('')

  }



  return (
    <div>

      <h1>LogIn</h1>

      <h4>Email</h4>


      <input type='text' name="email" onChange={handlechange} value={email}></input>



      <h4>Password</h4>


      <input type='text' name="password" onChange={handlechange} value={password}></input>

      <br></br>
      <br></br>

      <button onClick={login}>Login</button>
    </div>
  )


}
export default Login
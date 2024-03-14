import React from "react";
import "./login.css";
import login from "../../assets/login.jpg";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="imageContainer">
        <img src={login} alt="" className="loginImage" />
      </div>
      <div className="formContainer">
        {/* <p>hello</p> */}
          <div class="containerLogin">
            <div class="card">
              <a class="login">Log in</a>
              <div class="inputBox">
                <input type="text" required="required" />
                <span class="user">Username</span>
              </div>

              <div class="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
              </div>

              <button class="enter">Enter</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;

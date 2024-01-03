import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import styled from "styled-components";

function LoginPage() {
  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-warpper">
          <div className="form">
            <div className="title">
              <h1>Log in</h1>
            </div>
            <div className="container">
              <input type="email" placeholder="e-mail" />
              <input type="password" placeholder="password" />
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .form-warpper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    margin: 2px;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    height: 70vh;
    width: 60vh;
    border-radius: 20px;
  }
  .title {
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
  .container {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 60vh;
    padding: 4px;
    width: 40vh;
    input {
      padding: 1rem;
      border-radius: 0.5rem;
      outline: none;
    }
    button {
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: red;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
export default LoginPage;

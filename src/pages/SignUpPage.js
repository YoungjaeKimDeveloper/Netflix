import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import styled from "styled-components";

function SignUpPage() {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header signin />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies,TV shows and More</h1>
            <h4>Watch Anywhere, Cancel Anytime</h4>
            <h6>
              Ready to watch, Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="password" placeholder="password" name="password" />
            <input input="email" placeholder="email address" name="email" />
            <button>Get Started</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100vh;
    width: 100vw;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    color: white;
    text-align: center;
  }
  .form {
    display: grid;
    width: 60%;
    input {
      padding: 1.5rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem;
      background-color: red;
      font-weight: bold;
      font-size: 1.05rem;
      color: white;
      width: 10rem;
      border: none;
    }
  }
  h1 {
    padding: 0 2rem;
  }
  h4 {
    margin-top: -1.5rem;
  }
  h6 {
    margin-top: -1.5rem;
  }
`;

export default SignUpPage;

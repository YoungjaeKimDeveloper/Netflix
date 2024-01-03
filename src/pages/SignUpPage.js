import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebaise-config";

import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login={showPassword} />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies,TV shows and More</h1>
            <h4>Watch Anywhere, Cancel Anytime</h4>
            <h6>
              Ready to watch, Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formValues.password}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            ) : (
              <input
                input="email"
                placeholder="email address"
                name="email"
                value={formValues.email}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            )}
            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button onClick={handleSignIn}>Sign Up</button>
            )}
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
    text-align: center;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 2fr" : "1fr 1fr"};
    input {
      padding: 1.5rem;
      width: 60%;
      &:focus {
        outline: none;
      }
    }
    display: flex;
    justify-content: center;
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
    padding: 0 4rem;
  }
  h4 {
    margin: 2rem;
  }
  h6 {
    margin-top: 2rem;
  }
`;

export default SignUpPage;

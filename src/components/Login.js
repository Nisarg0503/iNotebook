import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      console.log("Login error");
      alert("Invalid Credentials");
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        {/* New Heading */}
        <h1 className="welcome-heading">
          Welcome! Please login or signup to continue.
        </h1>

        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d1117;

  .form-container {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 25px rgba(110, 63, 255, 0.3);
    color: #e6edf3;
    backdrop-filter: blur(12px);
    text-align: center;
  }

  /* New Welcome Heading */
  .welcome-heading {
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .form-title {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #6e3fff, #8f5fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  label {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    color: #cfcfcf;
  }

  input {
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: #161b22;
    color: #e6edf3;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s ease, box-shadow 0.3s ease;
  }

  input:focus {
    border: 1px solid #6e3fff;
    box-shadow: 0 0 10px rgba(110, 63, 255, 0.6);
  }

  .submit-btn {
    background: linear-gradient(90deg, #6e3fff, #8f5fff);
    border: none;
    padding: 0.9rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(110, 63, 255, 0.6);
  }
`;

export default Login;

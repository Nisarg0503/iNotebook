import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  const [creadentials, setcreadentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setcreadentials({ ...creadentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = creadentials;

    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert(json.error || "Signup failed");
    }
  };

  return (
    <Wrapper>
      <div className="form-container container p-4">
        <h2 className="form-title text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              required
            />
            <div className="form-text text-gray">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <button type="submit" className="submit-btn w-100">
            Sign Up
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
    box-shadow: 0 0 25px rgba(110, 63, 255, 0.3);
    color: #e6edf3;
    backdrop-filter: blur(12px);
  }

  .form-title {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #6e3fff, #8f5fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  input.form-control {
    background: #161b22;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #e6edf3;
    border-radius: 10px;
    transition: border 0.3s ease, box-shadow 0.3s ease;
  }

  input.form-control:focus {
    border: 1px solid #6e3fff;
    box-shadow: 0 0 10px rgba(110, 63, 255, 0.6);
    background: #161b22;
    color: #e6edf3;
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

  .text-gray {
    color: #cfcfcf;
  }
`;

export default SignUp;

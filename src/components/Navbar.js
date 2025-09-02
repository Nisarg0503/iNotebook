import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Wrapper className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active fw-semibold" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active fw-semibold" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="nav-btn">
                  Login
                </Link>
                <Link to="/signup" className="nav-btn">
                  Signup
                </Link>
              </>
            ) : (
              <button className="nav-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: #1c1c1e; /* dark navbar background */

  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(90deg, #6e3fff, #8f5fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-link {
    color: #cfcfcf;
    &.active {
      color: #6e3fff;
      font-weight: 600;
    }
    &:hover {
      color: #8f5fff;
    }
  }

  .nav-btn {
    background: linear-gradient(90deg, #6e3fff, #8f5fff);
    color: #ffffff !important;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin-left: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    text-decoration: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(110, 63, 255, 0.6);
      color: #ffffff !important;
    }
  }

  .navbar-toggler {
    border-color: #6e3fff;
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(110,63,255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/ %3E%3C/svg%3E");
    }
  }
`;

export default Navbar;

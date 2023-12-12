import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHomeTemplate() {
  const handelActiveClass = () => {
    return ({ isActive }) =>
      isActive ? "fw-bold nav-link active" : "nav-link";
  };

  const RenderLogin = () => {
    return (
      <>
        <button type="button" className="btn btn-success">
          Login
        </button>
        <button type="button" className="ms-2 btn btn-light">Sign Up</button>
      </>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <NavLink to={"home"} className="navbar-brand">
            <img
              src="https://i.pinimg.com/originals/54/51/75/54517514b7e9c8c21cb1526176c30732.jpg"
              alt=""
              style={{ width: 50, height: "auto" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse row"
            id="navbarSupportedContent"
          >
            <ul className="col-10 navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <li className="nav-item">
                <NavLink
                  className={handelActiveClass()}
                  aria-current="page"
                  to="home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={handelActiveClass()}
                  aria-current="page"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={handelActiveClass()}
                  aria-current="page"
                  to="news"
                >
                  News
                </NavLink>
              </li>
            </ul>
            <div className="col-2 text-white">{RenderLogin()}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

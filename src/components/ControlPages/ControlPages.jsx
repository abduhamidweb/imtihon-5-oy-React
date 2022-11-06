import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import context from "../../context/context";


const ControlPages = () => {
  const {userData}=useContext(context)
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    isActive ? "nav-link activeBorder fs-3 " : "nav-link"
                  }
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-book px-1"></i>
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/repo"
                  className={({isActive}) =>
                    isActive ? "nav-link activeBorder fs-3 " : "nav-link"
                  }
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-journal-bookmark px-1"></i>
                  Reposittories{" "}
                  <span className="bg-secondary rounded-5 p-1 text-light fs-6">
                    {
                      userData.public_repos
                    }
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/project"
                  className={({isActive}) =>
                    isActive ? "nav-link activeBorder fs-3 " : "nav-link"
                  }
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-columns px-1"></i>
                  Projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/packages"
                  className={({isActive}) =>
                    isActive ? "nav-link activeBorder fs-3 " : "nav-link"
                  }
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-box px-1"></i>
                  Packages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/stars"
                  className={({isActive}) =>
                    isActive ? "nav-link activeBorder fs-3 " : "nav-link"
                  }
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-star px-1 "></i>
                  Stars
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPages;

import React, { useContext } from "react";

// navigasi
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalState/GlobalContext";

export default function Navbar() {
  // use global state
  const [globalState] = useContext(GlobalContext);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <div className="container">
          <Link className="navbar-brand text-danger fw-bold" to="/">
            <img
              src={require("../Images/Soda.png")}
              alt="Soda.png"
              className="me-2 rounded-circle"
            />
            MyCoffe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>

          {/* kondisi login */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {globalState.isLogin ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={"/keranjang"}
                    // style={{ marginLeft: "55em" }}
                  >
                    <img
                      src={require("../Images/icon-keranjang.png")}
                      alt="icon-keranjang.png"
                      className="ms-5"
                    />
                  </Link>
                </li>
                <div className="dropdown">
                  <button
                    className="btn btn-transparent border border-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hello, User
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <img
                          src={require("../Images/icon-costumer.png")}
                          alt=""
                        />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/myTransaction">
                        <img
                          src={require("../Images/icon-Transaction.png")}
                          alt=""
                        />
                        My Transaction
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        <img
                          src={require("../Images/icon-Export.png")}
                          alt="icon-Export.png"
                        />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* button */}
                    <button
                      type="login"
                      className="btn fw-bold border border-danger border-2"
                    >
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </button>
                    <button
                      type="login"
                      className="btn bg-danger fw-bold text-end text-white mx-4 "
                    >
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={"/registrasi"}
                      >
                        Registrasi
                      </Link>
                    </button>

                    {/* end-button */}
                  </ul>
                </div>
              </>
            )}
          </ul>
          {/* END kondisi login */}
        </div>
      </nav>
    </div>
  );
}

import React, { useContext } from "react";

// import by file
import { dataProduct } from "./Products/Data";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalState/GlobalContext";

export default function Home() {
  // tes console
  // console.log("data dari data.js: ", dataProduct);
  const [globalState] = useContext(GlobalContext);
  console.log("GlobalContext di Hone.jsx: ", globalState);

  return (
    <div className="mt-5">
      {/* jumbroton manual */}
      <div className="jumbotron jumbotron-fluid text-white" hidden>
        <img
          src={require("../Images/img-jumbotron.png")}
          alt="img-jumbotron.png"
          className="float-end pt-5 me-5"
          style={{ width: "20em", height: "auto" }}
        />
        <div
          className="container rounded-3 p-5"
          style={{ backgroundColor: "#BD0707" }}
        >
          <h1 className="display-4 fw-bolder">MyCoffe</h1>
          <p className="lead">
            Things are changing, but we’re still here for you
          </p>

          <p style={{ width: "40em", height: "auto" }}>
            We have temporarily closed our in-store cafes, but select grocery
            and drive-thru locations remaining open. MyCoffee Drivers is also
            available
            <span>
              <br />
              <br />
              <br />
            </span>
            Let’s Order...
          </p>
        </div>
      </div>
      {/* END jumbroton manual */}
      <div className="my-3">
        <br />
      </div>
      {/* jumbroton img */}
      <div className="container">
        <img
          className="img-fluid"
          src={require("../Images/Jumbotron-bundle.png")}
          alt="Jumbotron-bundle.png"
          style={{ width: "80em", height: "auto" }}
        />
        {/* END jumbroton img */}
      </div>
      {/* CARD PRODUCT */}
      <div className="container mt-5">
        <h1>Let's Order</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
          {/* looping product */}
          {dataProduct.map((item, index) => {
            return (
              <div key={index} className="col">
                <div className="card h-100 shadow">
                  <img
                    src={require(`../Images/${item.img}`)}
                    className="card-img-top"
                    alt="img-produk"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-danger">
                      {item.productName}
                    </h5>
                    <p className="card-text text-danger">Rp. {item.price}</p>
                    {/* buttom card */}
                    <div className="row">
                      <div className="col-lg-6">
                        <button
                          type="button"
                          className="btn btn-light border border-danger border-3 w-100"
                        >
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={"/detail"}
                          >
                            Detail
                          </Link>
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button type="button" className="btn btn-danger w-100">
                          Order
                        </button>
                      </div>
                    </div>
                    {/* ENDbuttom card */}
                  </div>
                </div>
              </div>
            );
          })}
          {/* END looping product */}
        </div>
      </div>
      {/* END CARD  PRODUCT*/}
    </div>
  );
}

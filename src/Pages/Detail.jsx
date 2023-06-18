import React from "react";
import { dataProduct } from "./Products/Data";

export default function Detail() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src={require(`../Images/product1.png`)}
              alt="profile.png"
              className="container w-50 "
            />
          </div>
          <div className="col">
            {dataProduct.map((item, index) => {
              return (
                <div>
                  <h3>{item.productName}</h3>
                  <p>{item.img}</p>
                  <p>Rp. {item.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

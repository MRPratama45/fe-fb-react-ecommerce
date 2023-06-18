import React from "react";

export default function Cart() {
  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        <div className="col w-50">
          <h1>My Cart</h1>
          <h3>Review my Order</h3>
          <hr />
          <img src="" alt="gambar produk yg dipesam" />
          <p>tgl</p>
          <p>nama produk</p>
          <p>harga</p>
          <p>Qty: </p>
          <p>Qty: </p>
        </div>
        <div className="co w-25">
          <form>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Masukkan No Handphone Anda"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Kode Pos Anda"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Masukkan Alamat Anda"
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
              />
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

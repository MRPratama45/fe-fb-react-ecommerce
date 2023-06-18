import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src={require("../Images/img-profile.png")}
              alt="profile.png"
              className="container w-50 "
            />
          </div>
          <div className="col">
            <div className="mb-3 w-75 ">
              <label for="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example@gmail.com"
              />
            </div>
            <div className="mb-3 w-75">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Masukkan Password Anda"
              />
            </div>
            <div>
              <button type="button" className="btn btn-danger me-5">
                Save Update
              </button>
              <button type="button" className="btn btn-warning">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

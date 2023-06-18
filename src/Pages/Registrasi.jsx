import React from "react";

export default function Registrasi() {
  return (
    <div
      className="card p-3"
      style={{ width: "18rem", marginLeft: "35em", marginTop: "10em" }}
    >
      <h1>Registrasi</h1>
      <input
        type="text"
        className="form-control my-2"
        id="formGroupExampleInput"
        placeholder="Example@gmail.com"
      />
      <input
        type="text"
        className="form-control my2"
        id="formGroupExampleInput"
        placeholder="Fullname"
      />
      <input
        type="text"
        className="form-control my-2"
        id="formGroupExampleInput"
        placeholder="Password"
      />
      <input
        type="text"
        className="form-control my-2"
        id="formGroupExampleInput"
        placeholder="Confirm Password"
      />
      <p>
        Already have an account?
        <a href="/login">Login Here</a>
      </p>
      <div className="mt-2">
        <button type="button" className="btn btn-danger me-5">
          Login
        </button>
      </div>
    </div>
  );
}

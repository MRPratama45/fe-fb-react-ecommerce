import React from "react";

export default function Login() {
  return (
    <div
      className="card p-3"
      style={{ width: "18rem", marginLeft: "35em", marginTop: "10em" }}
    >
      <h1>Login</h1>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Example@gmail.com"
      />
      <input
        type="text"
        className="form-control mt-2"
        id="formGroupExampleInput"
        placeholder="Password"
      />
      <p>
        Don’t have an account? <a href="/registrasi">Register Here</a>
      </p>
      <div className="mt-2">
        <button type="button" className="btn btn-danger me-5">
          Login
        </button>
      </div>
    </div>
  );
}

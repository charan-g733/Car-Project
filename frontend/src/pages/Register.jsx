import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const createUser = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5555/cars/register", {
        Name,
        Email,
        Password,
      })
      .then((res) => {
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="m-8  text-center text-xl rounded-lg">
      <BackButton destination="/" />
      <h1>Register</h1>
      {loading ? <Spinner /> : ""}
      <form onSubmit={createUser}>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl  p-4 justify-center text-center mx-auto w-1/2 ">
          <label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className=" border-2 border-blue-300 rounded-lg mx-3 text-center my-2"
            />
          </label>
          <label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className=" border-2 border-blue-300 rounded-lg mx-3 text-center my-2"
            />
          </label>
          <label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" border-2 border-blue-300 rounded-lg mx-3  text-center my-2"
            />
          </label>
          <button
            type="submit"
            className=" border-2 border-blue-300 rounded-lg  text-center bg-blue-400 w-1/2 mx-auto p-1 my-2"
          >
            Submit
          </button>
          <p>
            Already have an account?
            <a className="text-blue-500">
              <Link to="/login">Login</Link>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

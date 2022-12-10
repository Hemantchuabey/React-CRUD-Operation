import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const navigate = useNavigate();
  const onAddUserInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const onSubmitNewUser = async (event) => {
    console.log(user);
    event.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate("/", { replace: true });
    // event.preventDefault();
  };

  return (
    <div>
      <h1>Add Users</h1>
      <form style={{ width: "100vw" }} onSubmit={(e) => onSubmitNewUser(e)}>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name..."
            name="name"
            value={user.name}
            onChange={(event) => {
              onAddUserInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Username..."
            name="username"
            value={user.username}
            onChange={(event) => {
              onAddUserInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Email..."
            name="email"
            value={user.email}
            onChange={(event) => {
              onAddUserInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Phone Number..."
            name="phone"
            value={user.phone}
            onChange={(event) => {
              onAddUserInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Website..."
            name="website"
            value={user.website}
            onChange={(event) => {
              onAddUserInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>

        <button style={{ marginLeft: "35rem" }}>Submit</button>
      </form>
    </div>
  );
}

export default AddUser;

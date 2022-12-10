import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loaduser();
  }, []);
  const navigate = useNavigate();
  const onEditInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const onSubmitNewUser = async (event) => {
    console.log(user);
    event.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/", { replace: true });
    // event.preventDefault();
  };

  const loaduser = async (event) => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };

  return (
    <div>
      <h1>Edit {user.name} Data</h1>
      <form style={{ width: "100vw" }} onSubmit={(e) => onSubmitNewUser(e)}>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name..."
            name="name"
            value={user.name}
            onChange={(event) => {
              onEditInput(event);
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
              onEditInput(event);
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
              onEditInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Phone Number..."
            name="phone"
            value={user.phone}
            onChange={(event) => {
              onEditInput(event);
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
              onEditInput(event);
            }}
            style={{ width: "50vw" }}
          />
        </div>

        <button style={{ marginLeft: "35rem" }}>Submit</button>
      </form>
    </div>
  );
}

export default EditUser;

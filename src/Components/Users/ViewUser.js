import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ViewUser.css";

function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loadUser();
  }, []);
  const { id } = useParams();
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(res.data);
    setUser(res.data);
  };
  return (
    <div>
      <div>
        <NavLink to="/">
          <button style={{ marginLeft: "28rem" }}>Back to Home</button>
        </NavLink>
      </div>

      <div className="viewUl">
        <div>
          <h3>Name : </h3> {user.name}
        </div>
        <div>
          <h3>Username : </h3> {user.username}
        </div>
        <div>
          <h3>Email : </h3> {user.email}
        </div>
        <div>
          <h3>Phone : </h3> {user.phone}
        </div>
        <div>
          <h3>Website : </h3> {user.website}
        </div>
      </div>
    </div>
  );
}

export default ViewUser;

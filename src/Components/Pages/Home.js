import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div>
      <div className="add-user">
        <NavLink to="users/add">
          <button>Add User</button>
        </NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th className="userTh">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <NavLink>
                    <button className="view">View</button>
                  </NavLink>
                  <NavLink to={`/users/edit/${user.id}`}>
                    <button className="edit">Edit</button>
                  </NavLink>
                  <NavLink>
                    <button
                      className="delete"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

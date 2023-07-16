import React, { useState } from "react";
import userList from "./users.json";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const matchingUsers = userList.filter(
      (user) => user.username === username && user.password === password
    );
    if (matchingUsers.length > 0) {
      const authenticatedUser = matchingUsers[0];
      console.log(authenticatedUser, "user");
      history(`/todo`);
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          className="form-control"
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;

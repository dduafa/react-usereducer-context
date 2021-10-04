import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthValues from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const { state, dispatch } = useAuthValues();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      payload: formValues,
    });
    navigate("home");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#4682b4",
    color: "white"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Login;

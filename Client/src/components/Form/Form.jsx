import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

const { contenedor, form, button, alerts, cn } = style;

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={contenedor}>
      <div className={cn}>
        <form className={form}>
          {/*Email*/}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.e1 ? (
            <p className={alerts}>{errors.e1}</p>
          ) : errors.e2 ? (
            <p className={alerts}>{errors.e2}</p>
          ) : (
            <p className={alerts}>{errors.e3}</p>
          )}

          {/*Password*/}
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.p1 ? (
            <p className={alerts}>{errors.p1}</p>
          ) : (
            <p className={alerts}>{errors.p2}</p>
          )}

          {/*Button*/}
          <button type="submit" className={button} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

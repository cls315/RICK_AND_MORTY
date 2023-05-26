import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <>
      <div className={style.nav}>
        <div>
          <NavLink to="/about">
            <button className={style.btn}>About</button>
          </NavLink>
          <NavLink to="/home">
            <button className={style.btn}>Home</button>
          </NavLink>
          <NavLink to="/favorites">
            <button className={style.btn}>Favorites</button>
          </NavLink>
        </div>

        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}

export default Nav;

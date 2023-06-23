import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <div>
        <Link to="/about">
          <button className={style.btn}>About</button>
        </Link>
        <Link to="/home">
          <button className={style.btn}>Home</button>
        </Link>
        <Link to="/favorites">
          <button className={style.btn}>Favorites</button>
        </Link>
      </div>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;

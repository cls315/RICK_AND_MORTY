import style from "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access ? navigate("/home") : window.alert("User or pass invalid");
    } catch (error) {
      console.log(error);
    }
  }

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert(error.response.data);
    }
  }

  function hndleOnClose(id) {
    const newCharacters = characters.filter((char) => char.id !== id);
    setCharacters(newCharacters);
  }

  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <div className="App">
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={
              <Cards
                characters={characters}
                hndleOnClose={hndleOnClose}
                className={style.Cards}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

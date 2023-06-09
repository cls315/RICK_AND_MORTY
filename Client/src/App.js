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
  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert(error.response.data);
    }
    //axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
    //({ data }) => {
    //if (data?.name) {
    //setCharacters((oldChars) => [...oldChars, data]);
    //} else {
    //window.alert("No hay personajes con este ID!");
    //}
    //}
    //);
  };

  const hndleOnClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((ch) => ch.id !== +id));
  };

  //const EMAIL = "camilasaya315@gmail.com";
  //const PASSWORD = "cls0315";

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
    //const { email, password } = userData;
    //const URL = "http://localhost:3001/rickandmorty/login/";
    //axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //  const { access } = data;
    //  setAccess(data);
    //  access && navigate("/home");
    //});
  }

  return (
    <div>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
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

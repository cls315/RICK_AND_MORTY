import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState({});

  const handleInputChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div className={style.barra}>
      <input
        className={style.input}
        type="search"
        onChange={handleInputChange}
        value={character}
      />
      <button onClick={() => onSearch(character)} className={style.boton}>
        Agregar
      </button>
    </div>
  );
}

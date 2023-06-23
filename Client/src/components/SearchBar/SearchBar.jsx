import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={style.barra}>
      <input
        className={style.input}
        type="search"
        onChange={handleInputChange}
        value={id}
      />
      <button onClick={() => onSearch(id)} className={style.boton}>
        Agregar
      </button>
    </div>
  );
}

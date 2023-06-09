import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const { container, img, descripcion } = style;

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const [character, setCharacter] = useState({});

  return (
    <div className={container}>
      <div className={descripcion}>
        <h1>{character.name}</h1>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
      </div>

      <img src={character.image} alt="" className={img} />
    </div>
  );
};

export default Detail;

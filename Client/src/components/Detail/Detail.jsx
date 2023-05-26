import React, { useState, useEffect } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const { container, img, descripcion } = style;

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      ({ data }) => {
        console.log(data);
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [detailId]);

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

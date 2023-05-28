import style from "./Card.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../Redux/Actions/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const { contenedor, h3, h2, p, button, img } = style;

function Card({ id, name, species, gender, image, onClose }) {
  let [isFav, setIsFav] = useState(false);
  let dispatch = useDispatch();
  let miFav = useSelector((state) => state.myFavorites);
  useEffect(() => {
    miFav.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [miFav]);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
      setIsFav(false);
    } else {
      let char = {
        id,
        name,
        species,
        gender,
        image,
        onClose,
      };
      dispatch(addFav(char));
      setIsFav(true);
    }
  };

  return (
    <div className={contenedor}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <img src={image} alt="" className={img} />
      <Link to={`/detail/${id}`}>
        <h2 className={h2}>{name}</h2>
      </Link>
      <div className={h3}>
        <h3>{species}</h3>
        <h3>{gender}</h3>
      </div>
      <button onClick={onClose} className={button}>
        X
      </button>
    </div>
  );
}

export default Card;

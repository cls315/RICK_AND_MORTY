import React from "react";
import style from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import {
  filterCards,
  orderCards,
  removeFav,
} from "../../Redux/Actions/actions";
import { useState } from "react";

const Favorites = () => {
  const { ho, hf } = style;

  const dispatch = useDispatch();

  const { myFavorites } = useSelector((state) => state);

  const onClose = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    const order = e.target.value;
    dispatch(orderCards(order));
  };

  const handleFilter = (e) => {
    const gender = e.target.value;
    dispatch(filterCards(gender));
  };

  return (
    <div>
      <select onChange={handleOrder} className={ho}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} className={hf}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      {myFavorites?.map(({ id, image, name, species, gender }) => {
        return (
          <Card
            key={id}
            id={id}
            image={image}
            name={name}
            species={species}
            gender={gender}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Favorites;

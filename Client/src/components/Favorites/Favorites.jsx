import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Card from "../Card/Card";
import {
  filterCards,
  orderCards,
  removeFav,
} from "../../Redux/Actions/actions";
//import { useState } from "react";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

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
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            image={fav.image}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}

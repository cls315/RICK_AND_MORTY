import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../Redux/Actions/actions";
import { useState } from "react";

export default function Favorites() {
  const favorites = useSelector((state) => state);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
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
      {favorites.myFavorites?.map((fav) => {
        return (
          <Card
            image={fav.image}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
          />
        );
      })}
    </div>
  );
}

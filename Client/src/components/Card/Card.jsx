import style from "./Card.module.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/Actions/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const { contenedor, h3, h2, img, button, btnFav, btn } = style;

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
    event.preventDefault();
    if (isFav) {
      setIsFav(false);
      props.removeFavCard(props.id);
    } else {
      setIsFav(true);
      props.addFavCard(props);
    }
  };

  useEffect(() => {
    props.myFavoriteCard.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavoriteCard]);

  return (
    <div className={contenedor}>
      <div>
        <img src={props.image} alt="" className={img} />
      </div>
      <Link to={`/detail/${props.id}`}>
        <h2 className={h2}>{props.name}</h2>
      </Link>
      <div className={h3}>
        <h3>{props.species}</h3>
        <h3>{props.gender}</h3>
      </div>
      <div className={btn}>
        {isFav ? (
          <button onClick={handleFavorite} className={btnFav}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={btnFav}>
            🤍
          </button>
        )}
        <button onClick={() => props.onClose(props.id)} className={button}>
          X
        </button>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavCard: (char) => dispatch(addFav(char)),
    removeFavCard: (id) => dispatch(removeFav(id)),
  };
}

export function mapStateToProps(state) {
  return {
    myFavoriteCard: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

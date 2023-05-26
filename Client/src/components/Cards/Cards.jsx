import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, hndleOnClose }) {
  return characters.map(({ id, name, species, gender, image }) => (
    <div className={style.div}>
      <div className={style.card}></div>
      <Card
        id={id}
        name={name}
        species={species}
        gender={gender}
        image={image}
        onClose={() => hndleOnClose(id)}
      />
    </div>
  ));
}

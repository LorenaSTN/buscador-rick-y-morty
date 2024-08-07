import "../scss/main/CharacterCard.scss";
import { Link } from "react-router-dom";

function CharacterCard({ characterInfo }) {
  return (
    <li className="card">
      <Link className="card__link" to={`/detail/${characterInfo.id}`}>
        <img
          className="card__photo"
          src={characterInfo.photo}
          alt={characterInfo.name}
        />
        <h4 className="card__name"> {characterInfo.name}</h4>
        <p className="card__status">{characterInfo.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;

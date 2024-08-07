import "../scss/main/CharacterDetail.scss";
import { Link } from "react-router-dom";

function CharacterDetail({ character }) {
  if (!character) {
    return <p>Character not found</p>;
  }

  const deadOrAlive = character.status === "Dead" ? "☠️" : "🤍";
  return (
    <div className="characterdetail">
      <Link className="characterdetail__link" to="/">
        Back to Home
      </Link>
      <img
        className="characterdetail__image"
        src={character.photo}
        alt={character.name}
      />
      <h4>{character.name}</h4>
      <p> Status: {deadOrAlive}</p>
      <p> Species:{character.species}</p>
      <p> Origin: {character.location}</p>
      <p> Episodes:{character.episode.length}</p>
    </div>
  );
}

export default CharacterDetail;

import "../scss/main/CharacterCard.scss";

function CharacterCard({ characterInfo }) {
  return (
    <li className="card">
      <img
        className="card__photo"
        src={characterInfo.photo}
        alt={characterInfo.name}
      />
      <h4 className="card__name"> {characterInfo.name}</h4>
      <p className="card__status">{characterInfo.species}</p>
    </li>
  );
}

export default CharacterCard;

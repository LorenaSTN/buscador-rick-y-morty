function CharacterCard({ characterInfo }) {
  return (
    <li>
      <img src={characterInfo.photo} alt={characterInfo.name} />
      <h4>{characterInfo.name}</h4>
      <p>{characterInfo.species}</p>
    </li>
  );
}

export default CharacterCard;

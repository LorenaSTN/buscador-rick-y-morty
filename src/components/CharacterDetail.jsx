function CharacterDetail({ character }) {
  if (!character) {
    return <p>Character not found</p>;
  }
  return (
    <div>
      <img src={character.photo} alt={character.name} />
      <h4>{character.name}</h4>
      <p> Status: {character.status}</p>
      <p> Species:{character.species}</p>
      <p> Origin: {character.location}</p>
      <p> Episodes:{character.episode.length}</p>
    </div>
  );
}

export default CharacterDetail;

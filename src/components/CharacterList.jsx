import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.id} characterInfo={character} />;
  });
  return (
    <section>
      <h2>Lista de personajes</h2>
      <ul>{charactersElements}</ul>
    </section>
  );
}

export default CharacterList;

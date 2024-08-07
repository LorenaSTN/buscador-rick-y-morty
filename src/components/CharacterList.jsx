import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.id} characterInfo={character} />;
  });
  return (
    <section>
      <ul>{charactersElements}</ul>
    </section>
  );
}

export default CharacterList;

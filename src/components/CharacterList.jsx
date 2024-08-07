import CharacterCard from "./CharacterCard";
import "../scss/main/CharacterList.scss";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.id} characterInfo={character} />;
  });
  return (
    <section className="list__characters">
      <ul className="list__characters__div">{charactersElements}</ul>
    </section>
  );
}

export default CharacterList;

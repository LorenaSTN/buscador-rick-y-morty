import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Logo from "../images/rickandmorty.png";
import { useEffect, useState } from "react";
import charactersFromApi from "./services/charactersFromApi";
import Filters from "./filters/Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilterName = (valueName) => {
    setFilterName(valueName);
  };

  const filteredCharactersName = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <header>
        <img className="header__logo" src={Logo} alt="Rick and Morty" />
      </header>
      <main>
        <Filters onChangeName={handleFilterName} />
        <CharacterList characters={filteredCharactersName} />
      </main>
    </>
  );
}

export default App;

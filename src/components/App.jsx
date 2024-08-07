import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Logo from "../images/rickandmorty.png";
import { useEffect, useState } from "react";
import charactersFromApi from "./services/charactersFromApi";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <>
      <header>
        <img className="header__logo" src={Logo} alt="Rick and Morty" />
      </header>
      <main>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;

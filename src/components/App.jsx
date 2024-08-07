import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Logo from "../images/rickandmorty.png";
import { useEffect, useState } from "react";
import charactersFromApi from "./services/charactersFromApi";
import Filters from "./filters/Filters";
import { Routes, Route } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { useLocation, matchPath } from "react-router-dom";

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

  const { pathname } = useLocation();
  console.log(pathname);
  const routeInfo = matchPath("/detail/:characterId", pathname);
  const idCharacter =
    routeInfo !== null ? parseInt(routeInfo.params.characterId) : null;
  const characterSelected = characters.find((character) => {
    console.log(typeof character.id);
    console.log(typeof idCharacter);
    return character.id === idCharacter;
  });
  console.log("characterSelected", characterSelected);

  return (
    <>
      <header>
        <img className="header__logo" src={Logo} alt="Rick and Morty" />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  onChangeName={handleFilterName}
                  valueName={filterName}
                />
                <CharacterList characters={filteredCharactersName} />
              </>
            }
          />

          <Route
            path="/detail/:characterId"
            element={<CharacterDetail character={characterSelected} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

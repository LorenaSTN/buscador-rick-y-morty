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
  const [filterSpecies, setFilterSpecies] = useState("All");

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
      const charactersSorted = charactersData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCharacters(charactersSorted);
    });
  }, []);

  const handleFilterName = (valueName) => {
    setFilterName(valueName);
  };

  const handleFilterSpecies = (valueSpecies) => {
    setFilterSpecies(valueSpecies);
  };

  const filteredCharactersName = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterSpecies === "All" || character.species === filterSpecies)
    );
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
      <header className="header">
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
                  onChangeSpecies={handleFilterSpecies}
                  valueSpecies={filterSpecies}
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

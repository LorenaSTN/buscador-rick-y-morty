import "../scss/App.scss";

import CharacterList from "./CharacterList";
import Logo from "../images/rickandmorty.png";
import { useEffect, useState } from "react";
import charactersFromApi from "./services/charactersFromApi";
import Filters from "./filters/Filters";
import { Routes, Route } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { useLocation, matchPath } from "react-router-dom";
import localStorage from "./services/localStorage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorage.get("filterName", "")
  );
  const [filterSpecies, setFilterSpecies] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    charactersFromApi().then((charactersData) => {
      const charactersSorted = charactersData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCharacters(charactersSorted);
    });
  }, []);

  useEffect(() => {
    localStorage.set("filterName", filterName);
  }, [filterName]);

  const handleFilterName = (valueName) => {
    setFilterName(valueName);
  };

  const handleFilterSpecies = (valueSpecies) => {
    setFilterSpecies(valueSpecies);
  };

  const handleFilterStatus = (valueStatus) => {
    setFilterStatus(valueStatus);
  };

  const filteredCharactersName = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(filterName.toLowerCase());

    const matchesSpecies =
      filterSpecies === "All" || character.species === filterSpecies;

    const matchesStatus =
      filterStatus === "All" || character.status === filterStatus;

    console.log(filterStatus);

    return matchesName && matchesSpecies && matchesStatus;
  });

  const { pathname } = useLocation();
  console.log(pathname);
  const routeInfo = matchPath("/detail/:characterId", pathname);
  const idCharacter =
    routeInfo !== null ? parseInt(routeInfo.params.characterId) : null;
  const characterSelected = characters.find((character) => {
    return character.id === idCharacter;
  });

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
                  onChangeStatus={handleFilterStatus}
                  valueStatus={filterStatus}
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

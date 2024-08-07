function charactersFromApi() {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const charactersList = data.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          species: character.species,
          gender: character.gender,
          location: character.location.name,
          episode: character.episode,
          status: character.status,
          id: character.id,
        };
      });
      return charactersList;
    });
}

export default charactersFromApi;

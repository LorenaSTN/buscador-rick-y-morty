function charactersFromApi() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    })
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

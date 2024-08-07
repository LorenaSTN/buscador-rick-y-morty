import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../../scss/main/Filters.scss";

function Filters({ onChangeName, valueName, onChangeSpecies, valueSpecies }) {
  return (
    <form className="form">
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
      <FilterBySpecies
        onChangeSpecies={onChangeSpecies}
        valueSpecies={valueSpecies}
      />
    </form>
  );
}

export default Filters;

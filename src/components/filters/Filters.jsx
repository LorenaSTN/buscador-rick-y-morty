import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../../scss/main/Filters.scss";

function Filters({
  onChangeName,
  valueName,
  onChangeSpecies,
  valueSpecies,
  onChangeStatus,
  valueStatus,
}) {
  return (
    <form className="form">
      <section className="form__section">
        <FilterByName onChangeName={onChangeName} valueName={valueName} />

        <FilterBySpecies
          onChangeSpecies={onChangeSpecies}
          valueSpecies={valueSpecies}
        />
      </section>
      <FilterByStatus
        onChangeStatus={onChangeStatus}
        valueStatus={valueStatus}
      />
    </form>
  );
}

export default Filters;

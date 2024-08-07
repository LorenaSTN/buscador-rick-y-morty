import FilterByName from "./FilterByName";

function Filters({ onChangeName, valueName }) {
  return (
    <form>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
    </form>
  );
}

export default Filters;

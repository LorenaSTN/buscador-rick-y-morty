import "../../scss/main/FilterByName.scss";

function FilterByName({ onChangeName, valueName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <input
        className="inputname"
        type="text"
        id="name"
        placeholder="Character's name"
        onChange={handleChangeName}
        value={valueName}
      />
    </div>
  );
}

export default FilterByName;

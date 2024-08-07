function FilterByName({ onChangeName, valueName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <input
        type="text"
        id="name"
        placeholder="Nombre del personaje"
        onChange={handleChangeName}
        value={valueName}
      />
    </div>
  );
}

export default FilterByName;

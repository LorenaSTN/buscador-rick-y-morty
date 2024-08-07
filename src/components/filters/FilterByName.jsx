function FilterByName({ onChangeName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        placeholder="Nombre del personaje"
        onChange={handleChangeName}
      />
    </div>
  );
}

export default FilterByName;

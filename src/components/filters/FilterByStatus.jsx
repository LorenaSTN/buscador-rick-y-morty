import "../../scss/main/FilterByStatus.scss";

function FilterByStatus({ onChangeStatus, valueStatus }) {
  const handleChangeStatus = (ev) => {
    onChangeStatus(ev.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChangeStatus}
        type="radio"
        id="All"
        name="All"
        value="All"
        checked={valueStatus === "All"}
        className="inputRadio"
      />
      <label htmlFor="All">All</label>

      <input
        onChange={handleChangeStatus}
        type="radio"
        id="Alive"
        name="Alive"
        value="Alive"
        checked={valueStatus === "Alive"}
        className="inputRadio"
      />
      <label htmlFor="Alive">Alive</label>

      <input
        onChange={handleChangeStatus}
        type="radio"
        id="Dead"
        name="Dead"
        value="Dead"
        checked={valueStatus === "Dead"}
        className="inputRadio"
      />
      <label htmlFor="Dead">Dead</label>

      <input
        onChange={handleChangeStatus}
        type="radio"
        id="unknown"
        name="unknown"
        value="unknown"
        checked={valueStatus === "unknown"}
        className="inputRadio"
      />
      <label htmlFor="unknown">Unknown</label>
    </div>
  );
}

export default FilterByStatus;

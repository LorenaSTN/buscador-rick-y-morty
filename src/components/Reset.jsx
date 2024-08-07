import "../scss/main/Reset.scss";

function Reset({ onClickReset }) {
  const handleReset = (ev) => {
    ev.preventDefault();
    onClickReset();
  };
  return (
    <div className="reset__container">
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default Reset;

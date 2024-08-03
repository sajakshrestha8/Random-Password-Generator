export default function Option(props) {
  return (
    <>
      <div className="check-content">
        <div className="input">
          <input
            type="checkbox"
            id={props.id}
            name={props.name}
            checked={props.checked}
            onClick={props.click}
            className="checkbox"
          />
        </div>
        <div className="option-label">
          <label>{props.option}</label>
        </div>
      </div>
    </>
  );
}

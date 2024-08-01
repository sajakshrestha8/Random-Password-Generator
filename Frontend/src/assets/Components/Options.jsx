export default function Option(props) {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        checked={props.checked}
        onClick={props.click}
      />
      <label>{props.option}</label>
    </>
  );
}

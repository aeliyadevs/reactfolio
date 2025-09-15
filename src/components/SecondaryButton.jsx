export default function SecondaryButton(props) {
  return (
    <button className="secondary-btn">
      {props.buttonText}
      <span>&#8594;</span>
    </button>
  );
}

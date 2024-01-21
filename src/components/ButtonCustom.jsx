export default function ButtonCustom({ type, buttonDisabled, children }) {
  console.log(type != "secondary" && buttonDisabled);
  return (
    <button
      className={`btn ${type == "secondary" && "btn--secondary"} ${
        buttonDisabled && "btn--disabled"
      }`}
      disabled={type != "secondary" && buttonDisabled}
    >
      {children}
    </button>
  );
}

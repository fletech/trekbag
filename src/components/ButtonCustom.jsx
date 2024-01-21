export default function ButtonCustom({
  type,
  buttonDisabled,
  children,
  onClick,
}) {
  return (
    <button
      className={`btn ${type == "secondary" && "btn--secondary"} ${
        buttonDisabled && "btn--disabled"
      }`}
      disabled={type != "secondary" && buttonDisabled}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

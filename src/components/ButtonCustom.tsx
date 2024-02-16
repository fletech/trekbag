import React from "react";
type ButtonProps = {
  type: string;
  buttonDisabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export default function ButtonCustom({
  type,
  buttonDisabled,
  children,
  onClick,
}: ButtonProps) {
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

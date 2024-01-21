import ButtonCustom from "./ButtonCustom";
import { secondaryButtons } from "../lib/data";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <ButtonCustom key={button.text} type={button.type}>
          {button.text}
        </ButtonCustom>
      ))}
    </section>
  );
}

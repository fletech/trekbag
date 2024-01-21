import ButtonCustom from "./ButtonCustom";
import { secondaryButtons } from "../lib/data";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllItemsAs,
}) {
  const actionChecker = (action) => {
    switch (action) {
      case "COMPLETE_ALL":
        return () => handleMarkAllItemsAs(true);
      case "INCOMPLETE_ALL":
        return () => handleMarkAllItemsAs(false);
      case "INITIAL":
        return handleResetToInitial;
      case "REMOVE_ALL":
        return handleRemoveAllItems;
      default:
        return null;
    }
  };
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => {
        button.handler = actionChecker(button.action);
        return (
          <ButtonCustom
            key={button.text}
            type={button.type}
            onClick={button.handler}
          >
            {button.text}
          </ButtonCustom>
        );
      })}
    </section>
  );
}

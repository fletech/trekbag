import ButtonCustom from "./ButtonCustom";
import { secondaryButtons } from "../lib/data";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllItemsAs = useItemsStore((state) => state.markAllItemsAs);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const actionChecker = (action) => {
    switch (action) {
      case "COMPLETE_ALL":
        return () => markAllItemsAs(true);
      case "INCOMPLETE_ALL":
        return () => markAllItemsAs(false);
      case "INITIAL":
        return resetToInitial;
      case "REMOVE_ALL":
        return removeAllItems;
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

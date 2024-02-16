import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const items = useItemsStore((state) => state.items);
  const isListEmpty = items.length === 0;
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      {!isListEmpty && <ButtonGroup />}
    </div>
  );
}

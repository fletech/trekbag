import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllItemsAs,
  isListEmpty,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      {!isListEmpty && (
        <ButtonGroup
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllItemsAs={handleMarkAllItemsAs}
        />
      )}
    </div>
  );
}

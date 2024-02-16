import { useMemo, useState } from "react";
import { initialItems, sortingOptions } from "../lib/data";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

export default function ItemList({}) {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState(sortingOptions[0]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy.value === "packed") {
        return b.packed - a.packed;
      }
      if (sortBy === "unpacked") {
        return a.packed - b.packed;
      }
      return;
    });
  }, [items, sortBy]);
  return (
    <ul className="item-list">
      {items.length == 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />{" "}
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

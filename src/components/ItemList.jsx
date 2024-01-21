import { useState } from "react";
import { initialItems } from "../lib/data";

export default function ItemList({ items }) {
  const addItemHandler = (event) => {};

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}

import { useEffect, useRef, useState } from "react";
import ButtonCustom from "./ButtonCustom";

export default function AddItemForm({ onAddItem }) {
  const [itemValue, setItemValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(itemValue == 0);
  const inputRef = useRef();

  useEffect(() => {
    itemValue.length > 0 ? setButtonDisabled(false) : setButtonDisabled(true);
  }, [itemValue]);

  const inputHandler = (event) => {
    setItemValue(event.target.value);
  };

  const addItemHandler = (e) => {
    e.preventDefault();

    if (itemValue.trim().length === 0) {
      inputRef.current.focus();
      return;
    }

    onAddItem(itemValue);
    setItemValue("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={addItemHandler}>
      <h2>Add Item</h2>
      <input
        type="search"
        value={itemValue}
        onChange={inputHandler}
        autoFocus
        ref={inputRef}
      />
      <ButtonCustom buttonDisabled={buttonDisabled} onClick={() => null}>
        Add to list
      </ButtonCustom>
    </form>
  );
}

import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import { initialItems } from "./lib/data";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemValue) => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: newItemValue,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (itemID) => {
    setItems((prev) => prev.filter((i) => i.id !== itemID));
  };

  const handleToggleItem = (itemID) => {
    const newItems = items.map((item) => {
      if (item.id === itemID) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllItemsAs = (itemPackingStatus) => {
    const newItems = items.map((item) => {
      return { ...item, packed: itemPackingStatus };
    });
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
          handleMarkAllItemsAs={handleMarkAllItemsAs}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

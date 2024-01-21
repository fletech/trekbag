import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import { initialItems } from "./lib/data";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar handleAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  );
}

export default App;

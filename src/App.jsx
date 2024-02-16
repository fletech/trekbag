import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import { initialItems } from "./lib/data";
import { useItemsStore } from "./stores/itemsStore";

function App() {
  const items = useItemsStore((state) => state.items);

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // });

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;

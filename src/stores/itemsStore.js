import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/data";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemValue) => {
        const newItem = {
          id: new Date().getTime().toString(),
          name: newItemValue,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (itemID) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== itemID);
          return { items: newItems };
        });
      },

      markAllItemsAs: (itemPackingStatus) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: itemPackingStatus };
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => set({ items: [] }),
      toggleItem: (itemID) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === itemID) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      resetToInitial: () => set({ items: initialItems }),
    }),
    {
      name: "items",
    }
  )
);

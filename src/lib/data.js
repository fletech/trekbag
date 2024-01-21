const secondaryButtons = [
  { type: "secondary", action: "COMPLETE_ALL", text: "Mark all as complete" },
  {
    type: "secondary",
    action: "INCOMPLETE_ALL",
    text: "Mark all as incomplete",
  },
  { type: "secondary", action: "INITIAL", text: "Reset to initial" },
  { type: "secondary", action: "REMOVE_ALL", text: "Remove all items" },
];

const initialItems = [
  { id: 1, name: "good mood", packed: true },
  { id: 2, name: "passport", packed: false },
  { id: 3, name: "thootbrush", packed: false },
];
export { secondaryButtons, initialItems };

export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  const allItemsPacked = numberOfItemsPacked === totalNumberOfItems;
  if (totalNumberOfItems === 0) {
    return null;
  }
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} packed
      {allItemsPacked ? " ✅" : null}
    </p>
  );
}

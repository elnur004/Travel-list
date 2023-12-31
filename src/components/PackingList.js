import Item from './Item';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: true },
//   { id: 3, description: 'Charger', quantity: 2, packed: false },
//   { id: 4, description: 'T-shirt', quantity: 10, packed: true },
// ];

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((initItem) => {
          return <Item item={initItem} key={initItem.id} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;

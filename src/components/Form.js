import { useState } from 'react';

const Form = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(20);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const inputHandler = (e) => setDescription(e.target.value);
  const quantityHandler = (e) => setQuantity(Number(e.target.value));

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={quantityHandler}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={inputHandler}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;

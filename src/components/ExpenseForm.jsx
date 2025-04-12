import React, { useState } from "react";

function ExpenseForm() {
  const [inputData, setInputData] = useState({
    id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });

  const [allExpenses, setAllExpenses] = useState([]);

  const updateField = (field, value) => {
    setInputData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputData.title || !inputData.category || !inputData.amount) {
      alert("Please fill in all fields!");
      return;
    }

    setAllExpenses((prev) => [...prev, inputData]);

    setInputData({
      id: crypto.randomUUID(),
      title: "",
      category: "",
      amount: "",
    });

    console.log("Expenses:", allExpenses); // You can remove this later
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder="Name of product"
          value={inputData.title}
          onChange={(e) => updateField("title", e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          className="category-option"
          value={inputData.category}
          onChange={(e) => updateField("category", e.target.value)}
        >
          <option value="" hidden>
            All
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={inputData.amount}
          onChange={(e) => updateField("amount", e.target.value)}
        />
      </div>

      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}

export default ExpenseForm;

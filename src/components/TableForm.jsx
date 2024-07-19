import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !quantity || !price) {
      alert("please file in all inputs ");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItems]);
      setISEditing(false);
    }
  }

  useEffect(() => {
    function calculateAmount(amount) {
      setAmount(quantity * price);
    }
    calculateAmount(amount);
  });

  useEffect(() => {
    if (list.length == 0) {
      setTotal(0);
    } else {
      let rows = document.querySelectorAll(".amount");
      let sum = 0;

      for (let i = 0; i < rows.length; i++) {
        if (rows[i].className === "amount") {
          sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
          // sum += parseInt(rows[i].innerText);
          setTotal(sum);
        }
      }
    }
  });

  function deleteRow(id) {
    setList(list.filter((item) => item.id !== id));
  }

  const [isEditing, setISEditing] = useState(false);

  function editeRow(id) {
    const editingRow = list.find((item) => item.id === id);
    setList(list.filter((item) => item.id !== id));
    setISEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="description">Item Discription</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="item discription "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10 md:mt-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>

      <table width="100%" className="mb-6">
        <thead>
          <tr className="bg-gray-100 p-1 ">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => {
          return (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td className="amount">{amount}</td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <AiOutlineDelete className="text-red-600 font-bold text-xl" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editeRow(id)}>
                      <FaEdit className="text-green-600 font-bold text-xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
      <div>
        <h2 className=" flex items-end justify-end text-gray-800 text-4xl font-bold ">
          {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

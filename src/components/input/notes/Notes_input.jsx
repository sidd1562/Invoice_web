import React from "react";

export default function Notes_input({notes, setNotes, setshowInvoice }) {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="notes">Enter Your notes</label>
      <textarea
        name="notes"
        placeholder="Additional notes to the client "
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        id="notes"
        cols={30}
        rows={10}></textarea>

      <button
        onClick={() => setshowInvoice(true)}
        className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
        Preview Invoice
      </button>
    </div>
  );
}

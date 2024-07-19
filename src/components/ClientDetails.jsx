import React from "react";

export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <>
      <section className="mt-10">
        <h2 className="uppercase text-xl font-bold mb-1">{clientName}Goku</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
}

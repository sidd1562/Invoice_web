import React from "react";

export default function MainDetails({name,address}) {
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="uppercase text-xl font-bold mb-1 md:text-xl ">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  );
}

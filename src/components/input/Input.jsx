import React from "react";

export default function ({
  name,
  setName,
  address,
  setAddress,
  email,
  setEmail,
  phone,
  setPhone,
  backName,
  setBackName,
  backAccount,
  setBackAccount,
  Website,
  setWebsite,
  clientName,
  setClientName,
  clientAddress,
  setClientAddress,
  invoiceNumber,
  setInvoiceNumber,
  invoiceDate,
  setInvoiceDate,
  dueDate,
  setDueDate,
}) {
  return (
    <div className="flex flex-col justify-center">
      <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="name">Your Full Name</label>
          <input
            type="text"
            name="text"
            id="name"
            placeholder="Enter Your name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address">Enter Your Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter Your Address"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
      
          <label htmlFor="website">Enter Your Website</label>
          <input
            type="url"
            name="website"
            id="website"
            placeholder="Enter Your website"
            autoComplete="off"
            value={Website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Enter Your phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Your phone"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
      
          <label htmlFor="bankName">Enter Your bankName</label>
          <input
            type="text"
            name="bankName"
            id="bankName"
            placeholder="Enter Your bankName"
            autoComplete="off"
            value={backName}
            onChange={(e) => setBackName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="backAccount">Enter Your backAccount</label>
          <input
            type="text"
            name="backAccount"
            id="backAccount"
            placeholder="Enter Your bankName"
            autoComplete="off"
            value={backAccount}
            onChange={(e) => setBackAccount(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-2 gap-10 md:mt-10">
        <div className="flex flex-col">
          <label htmlFor="clientName">Enter Your clientName</label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="Enter your client's name"
            maxLength={56}
            autoComplete="off"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
         
          <label htmlFor="clientAddress">Enter Your clientAddress</label>
          <input
            type="text"
            name="clientAddress"
            id="clientAddress"
            placeholder="Enter Your clientAddress"
            autoComplete="off"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-3 gap-10 ">
        <div className="flex flex-col">
 
          <label htmlFor="invoiceNumber">Enter Your invoiceNumber</label>
          <input
            type="text"
            name="invoiceNumber"
            id="invoiceNumber"
            placeholder="Enter Your invoiceNumber"
            autoComplete="off"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
     
          <label htmlFor="invoiceDate">Enter Your invoiceDate</label>
          <input
            type="date"
            name="invoiceDate"
            id="invoiceDate"
            placeholder="Enter Your invoiceDate"
            autoComplete="off"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="dueDate">Enter Your dueDate</label>
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            placeholder="Enter Your dueDate"
            autoComplete="off"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </article>
    </div>
  );
}

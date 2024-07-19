import { useRef, useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";
import Input from "./components/input/Input";
import Notes_input from "./components/input/notes/Notes_input";

function App() {
  const [showInvoice, setshowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [backName, setBackName] = useState("");
  const [backAccount, setBackAccount] = useState("");
  const [Website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState(
    "EverBank: 5.05% APY with no minimum deposit Popular Direct: 5.05% APY with a $100 minimum"
  );

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentRef = useRef();

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-download ml-7  bg-blue-500  text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div className="p-5" ref={componentRef}>
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />
              <ClientDetails
                className={clientName}
                clientAddress={clientAddress}
              />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                backAccount={backAccount}
                backName={backName}
                email={email}
                Website={Website}
                phone={phone}
              />
            </div>
            <button
              onClick={() => setshowInvoice(false)}
              className="bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Edit Information
            </button>
          </>
        ) : (
          <>
            <Input
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              backName={backName}
              setBackName={setBackName}
              backAccount={backAccount}
              setBackAccount={setBackAccount}
              Website={Website}
              setWebsite={setWebsite}
              clientName={clientName}
              setClientName={setClientName}
              clientAddress={clientAddress}
              setClientAddress={setClientAddress}
              invoiceNumber={invoiceNumber}
              setInvoiceNumber={setInvoiceNumber}
              invoiceDate={invoiceDate}
              setInvoiceDate={setInvoiceDate}
              dueDate={dueDate}
              setDueDate={setDueDate}
            />
            <article>
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                setList={setList}
                list={list}
                total={total}
                setTotal={setTotal}
              />
            </article>
            <Notes_input
              setNotes={setNotes}
              setshowInvoice={setshowInvoice}
              notes={notes}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;

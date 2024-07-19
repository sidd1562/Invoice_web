import React from "react";

export default function Footer({
  name,
  email,
  Website,
  backAccount,
  backName,
  phone,
}) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 p-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your Name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Your Email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone Number:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank Name:</span> {backName}
          </li>
          <li>
            <span className="font-bold">Account Holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account Number: </span> {backAccount}
          </li>
          <li>
            <span className="font-bold">Website:</span>
            <a href={Website} target="_blank" rel="noopenner noreferrer">
              {Website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

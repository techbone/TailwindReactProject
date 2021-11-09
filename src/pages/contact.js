import React from "react";
import ContactsFooter from "../components/ContactsFooter";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="h-auto flex  items-center flex-col bg-whiteBackground ">
        <h1 className="text-4xl uppercase font-mono pt-16">contact</h1>
        <div className="grid  grid-cols-2 gap-12 pt-12 pb-40">
          <div className="shadow-lg h-80 w-gridBox  bg-green flex items-center pt-7 flex-col ">
            <h1 className="text-4xl font-serif">I have a technical question</h1>
            <p className="pr-7 pt-5 text-xl">
              if you're already a customer,the fastest way to get
              <br />
              help is through our support ticketing system.
              <br />
              <br />
              You have a very fast way to reach out to us since
              <br />
              you already our customer.
            </p>
            <Link
              className="py-6 text-white px-7 bg-yellow-500  text-2xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center animate-pulse mt-2"
              to="/"
            >
              Submit a support Ticket
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
          <div className="shadow-lg  w-gridBox h-80 bg-white">
            <div className="shadow-lg h-80 w-gridBox  bg-white flex items-center pt-7 flex-col ">
              <h1 className="text-4xl font-serif">I have a basic question</h1>
              <p className="pr-7 pt-5 text-xl">
                Have a pre-sales question or general question
                <br />
                <p>about how our site /service works.</p>
              </p>
              <Link
                className="py-6 text-black px-7 bg-whitishBrown text-2xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center animate-pulse mt-9"
                to="/"
              >
                Complete a Form
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactsFooter />
    </>
  );
};

export default Contact;

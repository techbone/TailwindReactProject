import React from "react";
import { Link } from "react-router-dom";

const ContactsFooter = () => {
  return (
    <div className="h-56 bg-blackBackground flex justify-center items-center">
      <div className="flex flex-row gap-7">
        <p className="text-white text-3xl">
          Join the official WPForms Facebook group!
          <p className="text-white text-sm pl-5">
            Get exclusive access to insights,sneek peeks,giveways,and more
          </p>
        </p>
        <Link
          className="py-6 text-white mt-1 px-10 bg-yellow-500  text-3xl hover:bg-pink-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          to="/"
        >
          Join the VIP Circle
        </Link>
      </div>
    </div>
  );
};

export default ContactsFooter;

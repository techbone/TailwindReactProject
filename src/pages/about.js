import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="h-96  flex items-center flex-col pt-12 bg-about-image-one bg-no-repeat bg-cover ">
        <h1 className="text-4xl uppercase font-black text-white ">Our Story</h1>
        <p className="pt-7 text-4xl text-white">
          Everything we do is a celebration of lunch & dinner - from how we
          source our flour
          <br />
          and ingridents to serving up new ways for you to enjoy it. Since 1999,
          we've been
          <br />
          committed to bringing you a lunch & dinner experience you won't find
          anywhere else.
        </p>
        <p className="text-4xl ">That's how we Lunch & Snack Differently®.</p>
        <Link
          className="py-6 text-white mt-7 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          to="/"
        >
          WHAT'S COOKING?
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
      <div className="h-96 flex items-center flex-col pt-12 bg-about-image-two bg-no-repeat bg-cover bg-right-bottom">
        <h1 className="text-4xl uppercase font-black text-white ">
          from the kitchen
        </h1>
        <p className="pt-7 text-4xl text-white">
          Pizzafest®. SnackFest® .Endless Muffins®. If there's any type of lunch
          <br />
          and dinner you crave,find the perfect time to come in and discover
          <br />
          new ways to love it🍕.
        </p>
        <Link
          className="py-6 text-white px-10 bg-purple-500 rounded-full text-3xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          to="/"
        >
          WHAT'S COOKING?
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
      <div className="h-96 flex items-center flex-col pt-12 bg-about-image-three bg-no-repeat bg-cover bg-bottom">
        <h1 className="text-4xl uppercase font-black text-white ">
          advice to kitchen startups
        </h1>
        <p className="pt-7 text-4xl text-white">
          Do whatever you think is right and don't give in to anyone the right
          to discourage you
          <br />
          and make sure you love whatever it is you are cooking because "cooking
          is a gift
          <br />
          from the gods,and spices are a gift from the devil" - Sanji Vinsmoke🚬
        </p>
        <Link
          className="py-6 text-white mt-7 px-10 bg-pink-500 rounded-full text-3xl hover:bg-pink-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          to="/"
        >
          WHY I LOVE COOKING?
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
  );
};

export default About;

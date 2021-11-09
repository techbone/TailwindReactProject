import React from "react";
import FirstImage from "../images/egg muffins 2.jpeg";
import SecondImage from "../images/egg-salad.jpeg";
import ThirdImage from "../images/Grilled-Cheese-Pizza.jpeg";
import FourthImage from "../images/pepperoni 2.jpeg";
import FifthImage from "../images/vegan pizza.jpeg";

function Contents() {
  return (
    <>
      <div className="menu-card ">
        <img
          src={FirstImage}
          alt="rest1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-contents">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy,delicious, and nutritious</p>
          <span>21$</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={SecondImage}
          alt="rest1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-contents">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crispy,delicious, and nutritious</p>
          <span>20$</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ThirdImage}
          alt="rest1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-contents">
          <h2 className="text-2xl mb-2">Grilled Cheese Pizza</h2>
          <p className="mb-2">Tasty,satisfying, and creamy</p>
          <span>24$</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={FourthImage}
          alt="rest1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-contents">
          <h2 className="text-2xl mb-2">Pepperoni Pizza</h2>
          <p className="mb-2">Tasty,satisfying, and creamy</p>
          <span>25$</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={FifthImage}
          alt="rest1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-contents">
          <h2 className="text-2xl mb-2">Vegan Pizza</h2>
          <p className="mb-2">Crispy,satisfying, and creamy</p>
          <span>27$</span>
        </div>
      </div>
    </>
  );
}

export default Contents;

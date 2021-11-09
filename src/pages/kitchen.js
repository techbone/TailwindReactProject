import React from "react";
import { Link } from "react-router-dom";

const Kitchen = () => {
  return (
    <>
      <div className="h-screen bg-kitchen-image bg-no-repeat bg-cover "></div>
      <div className="grid grid-cols-2">
        <div className="p-24 text-4xl font-mono">
          <h1>WELCOME TO MUSA'S KITCHEN</h1>
          <p className="text-xs font-serif pt-7 tracking-widest">
            Welcome to Hawksworth Restaurant A celebration of Vancouver's
            cultural diversity
            <br /> and natural environment Hawksworth Restaurant showcases
            ingredient led, contemporary
            <br /> cuisine that demonstrates the highly skilled technique and
            relentless drive for perfection
            <br /> that has become Chef David Hawksworth's trademark.
            <br />
            <br />
            Five-time winner of Best Upscale Restaurant in Vancouver Magazine's
            Restaurant Awards,
            <br /> Hawksworth Restaurant is glamorous and elegant, yet relaxed
            and welcoming with warm
            <br /> and attentive service. Hawkworth Restaurant is located the
            heart of the city at Georgia and
            <br /> Howe Streets within the legendary Rosewood Hotel Georgia.
            <br />
            <br />
            Open for breakfast, brunch, lunch and dinner, with in bar dining
            menus and its own private
            <br /> rooms, Hawksworth can deliver an array of dining experiences
            from power breakfasts to after
            <br /> work drinks, to formal gala events.
          </p>
        </div>
        <div>
          <p className="pt-24 text-sm font-serif  tracking-widest">
            <b className="text-2xl">we tweeted:</b>
            <br />
            <br />
            Fifth on our BC Journey Tasting Menu is The Farm. // Beef,
            lingonberry, and sunchoke.
            <br /> Call us at 604.673-7000 to ma....
            <u>co/JW2VIBPMeA</u> Time ago 23 <u>Hours</u> via <u>TweetDeck</u>
            <br />
            <br />
            <p>
              <b className="text-2xl ">
                nightingale's heirloom tomato salad recipe
              </b>
              <br />
              <br />
              Heirloom tomato, tahini, baba ghanouj, mint, and grilled focaccia
              Ingredients: 2 large, ripe
              <br /> heirloom tomatoes 3o heirloom cherry tomatoes (Sungold
              varietal preferred) 100g tahini &<br /> cilantro dressing (recipe
              below) 140g baba ghanouj (recipe below) 15 mint leaves 15 basil
              <br />
              leaves 3 slices of grilled bread (focaccia preferred) Olive oil
              (to taste) Maldon salt (to taste) [..]
              <br />
              <br />
              <Link to="/" className="cursor-pointer">
                <u>More from our blog</u>
              </Link>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Kitchen;

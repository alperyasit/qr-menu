import { useState } from "react";

export default function Menu() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="menu-items">
      <div className="hot-drinks">
        <button onClick={() => toggleCategory("hot")}>
          Hot Drinks
          {openCategory === "hot" && (
            <div className="items-container">
              <div className="items">
                <h4></h4>
                <p>Coffee</p>
                <p>Tea</p>
                <p>Hot Chocolate</p>
                <p>Hot Water</p>
              </div>
              <div className="price">
                <h4>Price</h4>
                <p>1.25 €</p>
                <p>1.45 €</p>
                <p>1.55 €</p>
                <p>1.35 €</p>
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="cold-drinks">
        <button onClick={() => toggleCategory("cold")}>
          Cold Drinks
          {openCategory === "cold" && (
            <div className="items-container">
              <div className="items">
                <h4></h4>
                <p>Water</p>
                <p>Soda</p>
                <p>Juice</p>
                <p>Milkshake</p>
              </div>
              <div className="price">
                <h4>Price</h4>
                <p>0.50 €</p>
                <p>1.45 €</p>
                <p>1.55 €</p>
                <p>1.75 €</p>
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="food">
        <button onClick={() => toggleCategory("food")}>
          Food
          {openCategory === "food" && (
            <div className="items-container">
              <div className="items">
                <h4></h4>
                <p>Sandwich</p>
                <p>Salad</p>
                <p>Soup</p>
              </div>
              <div className="price">
                <h4>Price</h4>
                <p>1.25 €</p>
                <p>1.55 €</p>
                <p>1.85 €</p>
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="desserts">
        <button onClick={() => toggleCategory("dessert")}>
          Desserts
          {openCategory === "dessert" && (
            <div className="items-container">
              <div className="items">
                <h4></h4>
                <p>Ice Cream</p>
                <p>Cake</p>
                <p>Pie</p>
              </div>
              <div className="price">
                <h4>Price</h4>
                <p>1.65 €</p>
                <p>1.95 €</p>
                <p>1.25 €</p>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

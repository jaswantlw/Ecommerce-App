import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title";
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState(
    []
  );

  useEffect(() => {
    const bestProduct = products.filter(
      (item) => item.bestseller
    );
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text:xs sm:text-sm md:text-base text-gray-600">
          Our most-loved picks — these best
          sellers are flying off the shelves for a
          reason. Tried, tested, and adored by our
          customers, they’re the perfect blend of
          style and substance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

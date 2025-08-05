import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    setLatest(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title
          text1={"LATEST"}
          text2={"COLLECTION"}
        />
        <p className="w-3/4 m-auto text:xs sm:text-sm md:text-base text-gray-600">
          Explore our latest arrivals — a curated
          selection of standout pieces designed to
          elevate your everyday style. From
          timeless staples to bold new designs,
          discover what’s trending now.
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latest.map((item, index) => (
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

export default LatestCollection;

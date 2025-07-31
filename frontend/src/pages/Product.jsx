import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } =
    useContext(ShopContext);
  const [productData, setProductData] =
    useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find(
      (item) => item._id === productId
    );
    if (product) {
      setProductData(product);
      setImage(product.image?.[0] || "");
    }
  };

  useEffect(() => {
    fetchProductData();
    setSize("");
    window.scrollTo(0, 0);
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*--------------- Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map(
              (item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              )
            )}
          </div>

          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={image}
            ></img>
          </div>
        </div>

        {/*--------------------Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img
              src={assets.star_icon}
              alt=""
              className="w-3.5"
            />
            <img
              src={assets.star_icon}
              alt=""
              className="w-3.5"
            />
            <img
              src={assets.star_icon}
              alt=""
              className="w-3.5"
            />
            <img
              src={assets.star_icon}
              alt=""
              className="w-3.5"
            />
            <img
              src={assets.star_dull_icon}
              alt=""
              className="w-3.5"
            />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map(
                (item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size
                        ? "border-orange-500"
                        : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          <button
            onClick={() =>
              addToCart(productData._id, size)
            }
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5"></hr>

          <div className="text-sm text-gray-500 mt-5 flex-col gap-1 flex">
            <p>100% Original Product</p>
            <p>
              Cash on delivery is available on
              this product
            </p>
            <p>
              Easy return and exchange policy
              within 7 days
            </p>
          </div>
        </div>
      </div>
      {/*-------------Desc & Review */}
      <div className="mt-10">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">
            Description
          </b>
          <p className="border px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Minima
            neque aspernatur nesciunt nihil
            dolore, iure modi est fugiat nam
            corrupti error sit recusandae quas
            officia, ex soluta quo? Inventore,
            optio!
          </p>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Molestiae veniam quos ut qui quam quod
            nemo voluptatum, repellendus sit
            sapiente ipsum ad, culpa deserunt
            veritatis impedit, autem odio nulla
            reprehenderit?
          </p>
        </div>
      </div>

      {/*--------------display related products */}
      <RelatedProducts
        productId={productId}
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;

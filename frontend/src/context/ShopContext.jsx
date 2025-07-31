import {
  createContext,
  useEffect,
  useState,
} from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;

  const [search, setSearch] = useState("");
  const [showSearched, setShowSearched] =
    useState(false);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
    } else {
      let cartData = structuredClone(cartItems);
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size]++;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
      }

      setCartItems(cartData);
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (err) {}
      }
    }

    return totalCount;
  };

  const updateQuantity = async (
    itemId,
    size,
    quantity
  ) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let sum = 0;

    for (const items in cartItems) {
      let itemInfo = products.find(
        (product) => product._id === items
      );
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            sum +=
              itemInfo.price *
              cartItems[items][item];
          }
        } catch (err) {}
      }
    }

    return sum;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearched,
    setShowSearched,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

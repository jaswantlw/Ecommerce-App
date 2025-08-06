import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    deliveryFee,
    products,
  } = useContext(ShopContext);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find(
                (product) => product._id === items
              )
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity =
                cartItems[items][item];

              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(backendUrl+"/api/order/stripe", orderData, {headers: {token}})

          if(responseStripe.data.success){
            const {session_url} = responseStripe.data;

            window.location.replace(session_url);
          }
          else {
            toast.error(responseStripe.data.message);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handlePlaceOrder}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/*-----------------Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title
            text1={"Delivery"}
            text2={"INFORMATION"}
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name *"
            required
          />
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name *"
          />
        </div>

        <input
          className="border border-green-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address *"
          required
        />

        <input
          className="border border-green-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street *"
          required
        />

        <div className="flex gap-3">
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City *"
            required
          />
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State *"
            required
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="ZIP Code *"
            required
          />
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country *"
            required
          />
        </div>

        <input
          className="border border-green-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone *"
        />
      </div>

      {/*---------------Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title
            text1={"PAYMENT"}
            text2={"METHOD"}
          />

          {/* Payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            {["stripe", "cod"].map(
              (payMethod) => (
                <div
                  key={payMethod}
                  onClick={() =>
                    setMethod(payMethod)
                  }
                  className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                >
                  <p
                    className={`min-w-3.5 h-3.5 border rounded-full ${
                      method === payMethod
                        ? "bg-green-500"
                        : ""
                    }`}
                  ></p>
                  {payMethod === "cod" ? (
                    <p className="text-gray-500 text-sm font-medium mx-4">
                      CASH ON DELIVERY
                    </p>
                  ) : (
                    <img
                      className="h-5 mx-4"
                      src={
                        assets[
                          `${payMethod}_logo`
                        ]
                      }
                      alt={`${payMethod} logo`}
                    />
                  )}
                </div>
              )
            )}
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

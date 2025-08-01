import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const { navigate } = useContext(ShopContext);

  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isFormValid = () =>
    form.firstName &&
    form.lastName &&
    form.email &&
    form.street &&
    form.city &&
    form.state &&
    form.zip &&
    form.country &&
    form.phone;

  const handlePlaceOrder = () => {
    if (!isFormValid()) {
      toast.error(
        "Please fill in all required delivery fields."
      );
      return;
    }
    navigate("/orders");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
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
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name *"
            required
          />
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name *"
          />
        </div>

        <input
          className="border border-green-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address *"
          required
        />

        <input
          className="border border-green-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder="Street *"
          required
        />

        <div className="flex gap-3">
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City *"
            required
          />
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State *"
            required
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            placeholder="ZIP Code *"
            required
          />
          <input
            className="border border-green-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country *"
            required
          />
        </div>

        <input
          className="border border-green-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          name="phone"
          value={form.phone}
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
            {["stripe", "razorpay", "cod"].map(
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
              onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

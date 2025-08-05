import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing order using COD:
const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
      address,
    };

    const newOrder = new orderModel(orderData);

    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, {
      cartData: {},
    });

    res.json({
      success: true,
      message: "Order placed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//placing order using stripe:
const placeOrderStripe = async (req, res) => {};

//placing order using razorpay:
const placeOrderRazorpay = async (req, res) => {};

//display all order for admin:
const allOrders = async (req, res) => {};

//display all order for user:
const userOrders = async (req, res) => {
  try {
    const userId = req.userId;

    const orders = await orderModel.find({
      userId,
    });

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//update order status from admin:
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};

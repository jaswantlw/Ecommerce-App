import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin features
orderRouter.post(
  "/status",
  adminAuth,
  updateStatus
);

orderRouter.post("/list", adminAuth, allOrders);

//payment features
orderRouter.post("/place", authUser, placeOrder);

orderRouter.post(
  "/stripe",
  authUser,
  placeOrderStripe
);

orderRouter.post(
  "/razorpay",
  authUser,
  placeOrderRazorpay
);

orderRouter.post(
  "/userorders",
  authUser,
  userOrders
);

export default orderRouter;
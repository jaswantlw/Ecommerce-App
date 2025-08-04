import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
); //mongoose skips all empty properties so when creating a user, cartData will be empty and thus not shown.

const userModel =
  mongoose.models.user ||
  mongoose.model("user", userSchema);

export default userModel;

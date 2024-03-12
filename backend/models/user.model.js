import mongoose from "mongoose";
import validator from "validator";

const messageModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required !"],
    minLength: [3, "Name should be atleast 3 character."],
  },
  email: {
    type: String,
    required: [true, "Email is required !"],
    validate: [validator.isEmail, "Please provide a valid mail."],
  },
  subject: {
    type: String,
    required: [true, "Subject is required !"],
    minLength: [5, "Subject should contain atleast 5 character."],
  },
  message: {
    type: String,
    required: [true, "Message is required !"],
    minLength: [10, "Minimum 10 characters message is needed."],
  },
});

export const Message = mongoose.model("User_Model_Msg", messageModel);

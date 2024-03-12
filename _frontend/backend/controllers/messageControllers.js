import { Message } from "../models/user.model.js";

export const messageSent = async (req, res) => {
  // Controller function to handle sending messages
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      // Check if all required fields are provided
      return res.status(400).json({
        success: false,
        message: "All the fields are required !",
      });
    }

    // Create a new message in the database
    await Message.create({ name, email, subject, message });

    res.status(200).json({
      // Send success response
      success: true,
      message: "Message has been sent successfully",
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      let errorMessage = "";
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " ";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " ";
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + " ";
      }
      return res.status(200).json({
        success: true,
        message: errorMessage
      })
    }

    console.error(error); // Log error to console

    res.status(500).json({
      // Send error response
      success: false,
      message:
        "An error occurred while sending the message. Please try again later.",
    });
  }
};

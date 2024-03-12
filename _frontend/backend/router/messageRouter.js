import { messageSent } from "../controllers/messageControllers.js"; // Importing messageSent controller
import express from "express";

const router = express.Router();// Create instance of Express router

router.post("/send", messageSent); // POST route for handling the sending messages

export default router;

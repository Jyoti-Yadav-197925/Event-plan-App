import express from "express";
import dotenv from "dotenv";
import { mongooseDB } from "./config/mongoose.js";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: ".env" }); // Loaded environment variables from .env file

// Set up CORS middleware to allow requests from the specified frontend URL
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"], // Only allow POST requests
    credentials: true, // Enable credentials to allow sending cookies and other data
}))


app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use("/api/v1/message", messageRouter); // Mounting message router

mongooseDB(); // Connection to Mongo_database

export default app;

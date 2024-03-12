import app from "./index.js";

const PORT = process.env.PORT || 8000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});

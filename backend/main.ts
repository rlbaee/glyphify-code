import express from "express";

const app = express();

app.post("/upload", (req, res) => {
	// Handle file upload and processing here
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});

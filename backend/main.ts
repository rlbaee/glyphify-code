import express from "express";

const app = express();

app.post("/upload", () => {
	// Handle file upload and processing here
});

app.listen(5173, () => {
	console.log("Server is running on http://localhost:5173");
});

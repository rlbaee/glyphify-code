import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
const upload = multer(); // stores files in memory as Buffer

app.use(cors());

app.post("/upload-image", upload.single("image"), (req, res) => {
	const file = req.file;

	if (!file) {
		res.status(400).json({ error: "No file uploaded" });
		return;
	}

	// Send the image buffer back with the correct MIME type
	res.set("Content-Type", file.mimetype);
	res.send(file.buffer);
});

app.listen(3001, () => {
	console.log("Server is running on http://localhost:3001");
});
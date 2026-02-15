import "./App.css";

function App() {
	const formData = new FormData();
	return (
		<input
			type="file"
			accept="image/*"
			placeholder="Take a photo"
			onChange={(e) => {
				const file = e.target.files?.[0];
				if (file) console.log(file);
			}}
		/>
	);
}

export default App;

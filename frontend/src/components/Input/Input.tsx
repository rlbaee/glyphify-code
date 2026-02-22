import { CameraIcon, ImagesSquareIcon } from "@phosphor-icons/react";

export default function Input() {
	function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("image", file);

		fetch("http://localhost:5173/upload-image", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => console.log("Server response:", data))
			.catch((err) => console.error("Upload error:", err));
	}

	return (
		<div className="flex gap-4">
			<label className="button">
				<CameraIcon size={48} />
				<input
					type="file"
					accept="image/*"
					capture="environment"
					hidden
					onChange={handleFile}
				/>
			</label>

			<label className="button">
				<ImagesSquareIcon size={48} />
				<input type="file" accept="image/*" hidden onChange={handleFile} />
			</label>
		</div>
	);
}

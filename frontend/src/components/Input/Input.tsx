import { useState } from "react";
import { CameraIcon, ImagesSquareIcon } from "@phosphor-icons/react";

export default function Input() {
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("image", file);

		fetch(`http://${window.location.hostname}:3001/upload-image`, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.blob())
			.then((blob) => {
				const url = URL.createObjectURL(blob);
				setImageUrl(url);
			})
			.catch((err) => console.error("Upload error:", err));
	}

	return (
		<div className="flex flex-col items-center gap-4">
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

			{imageUrl && (
				<img
					src={imageUrl}
					alt="Returned from server"
					style={{ maxWidth: "100%", borderRadius: "8px" }}
				/>
			)}
		</div>
	);
}

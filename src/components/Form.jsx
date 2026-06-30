import { useState } from "react";

export default function Form() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		feedback: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const isFormValid = () => {
		return formData.name && formData.email && formData.feedback;
	};

	return (
		<div className="form-container">
			<h1>User Feedback Form</h1>
			<form>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label htmlFor="feedback">Feedback:</label>
				<textarea
					id="feedback"
					name="feedback"
					rows="4"
					cols="50"
					value={formData.feedback}
					onChange={handleChange}
					maxLength="200"
					required
				></textarea>

                <div className="character-counter">
                    {`${formData.feedback.length} / 200 characters`}
                </div>
			</form>

			<button
            id="submitBtn"
				type="submit"
				disabled={!isFormValid()}
			>
				Submit
			</button>

			<div className="preview">
				<h2>Real-Time Preview</h2>

				<p>
					<strong>Name:</strong> {formData.name}
				</p>
				<p>
					<strong>Email:</strong> {formData.email}
				</p>
				<p>
					<strong>Feedback:</strong> {formData.feedback}
				</p>
			</div>
		</div>
	);
}

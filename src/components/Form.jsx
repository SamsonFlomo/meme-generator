import { useState } from "react";
import { useId } from "react";


export default function Form() {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		comments: "",
		isFriendly: false,
		employment: "",
		favColor: "",
	})
	const id = useId()


	function handleChange(e) {
		setData(prevDAta => {
			const { name, value, type } = e.target

			return {
				...prevDAta,
				[name]: type === "checkbox" ? !prevDAta[name] : value
			}
		})
	}


	function handleSubmit(e) {
		e.preventDefault()
		console.log(data)
	}


	return (
		<form className="form" onSubmit={handleSubmit}>
			<label>First Name:
				<input
					type="text"
					name="fistName"
					id={id + "--firstName"}
					value={data.firstName}
					onChange={handleChange}
				/>
			</label>
			<label>Last Name:
				<input
					type="text"
					name="lastName"
					id={id + "--lastName"}
					value={data.lastName}
					onChange={handleChange}
				/>
			</label>
			<textarea
				value={data.comments}
				name="comments"
				id={id + "--comments"}
				placeholder="Make a comment"
				onChange={handleChange}
			/>
			<br />
			<label>Are you friendly?
				<input
					type="checkbox"
					name="isFriendly"
					id={id + "--isFriendly"}
					onChange={handleChange}
					checked={data.isFriendly}
				/>
			</label>
			<fieldset>
				<legend>Current Employment Status</legend>
				<input
					type="radio"
					name="employment"
					value="Employed"
					checked={data.employment === "Employed"}
					id={id + "--employed"}
					onChange={handleChange}
				/>
				<label htmlFor={id + "--employed"}>Employed</label>
				<input
					type="radio"
					name="employment"
					value="Unemployed"
					checked={data.employment === "Unemployed"}
					id={id + "--unemployed"}
					onChange={handleChange}
				/>
				<label htmlFor={id + "--unemployed"}>Unemployed</label>
				<input
					type="radio"
					name="employment"
					value="Part-Time"
					checked={data.employment === "Part-Time"}
					id={id + "--part-time"}
					onChange={handleChange}
				/>
				<label htmlFor={id + "--part-time"}>Part-Time</label>
			</fieldset>
			<br />
			<select
				name="favColor"
				id={id + "--favColor"}
				value={data.favColor}
				onChange={handleChange}
			>
				<option value="">-- Select a Color --</option>
				<option value="orange">Orange</option>
				<option value="yellow">Yellow</option>
				<option value="green">Green</option>
				<option value="blue">Blue</option>
				<option value="indigo">Indigo</option>
				<option value="violet">Violet</option>
			</select>
			<br />
			<button id={id + "--submit"}>Submit</button>

		</form>
	)
}

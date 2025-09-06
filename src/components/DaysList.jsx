import { useState, useEffect } from "react";
import "../css/DaysList.css";

function DaysList() {
	// List of days
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	// State for selected day
	const [selectedDay, setSelectedDay] = useState(days[new Date().getDay()]);

	return (
		<div className="days-list">
			{days.map((day, index) => (
				<button
					key={day}
					className={`day-button ${
						selectedDay === day ? "selected" : ""
					} ${
						index === 0
							? "first-day"
							: index === days.length - 1
							? "last-day"
							: ""
					}`}
					onClick={() => setSelectedDay(day)}
				>
					{day}
				</button>
			))}
		</div>
	);
}

export default DaysList;

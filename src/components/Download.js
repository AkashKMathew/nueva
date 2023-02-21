import React from "react";
import './Download.css';

const Download = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('Schedule.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Schedule.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center>
                <div className="group">
				<div className="drow1">
                <button onClick={onButtonClick} className="c1">
                Inaugural Ceremony Schedule
				</button>
                <button onClick={onButtonClick} className="c1">
                Program Details
				</button>
                </div>
                <div className="drow2">
                <button onClick={onButtonClick} className="c1">
                Events Schedule
				</button>
                <button onClick={onButtonClick} className="c1">
                Closing Ceremony Schedule
				</button>
                </div>
				</div>
			
				<button className="c2" >
				<a href="https://www.yepdesk.com/buy-tickets/63a30cd4c9e77c00010264ec" target={"_blank"} rel="noreferrer">Register</a>
				</button>
			</center>
		</>
	);
};

export default Download;

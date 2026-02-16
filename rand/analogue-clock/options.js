const numOfMarkersSlider = document.getElementById("numOfMarkers");
const numOfMarkersNumbers = document.querySelector('input[type="number"]');
const markerContainer = document.querySelector("div.marker");

const markerTemplate = document.getElementById("markerTemplate");

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
});

numOfMarkersSlider.addEventListener("input", () => {
	const userInput = numOfMarkersSlider.value;
	numOfMarkersNumbers.value = userInput;
	setMarkers(userInput);
});

numOfMarkersNumbers.addEventListener("input", () => {
	const userInput = numOfMarkersNumbers.value;
	numOfMarkersSlider.value = userInput;
	setMarkers(userInput);
});

function setMarkers(newNumOfMarkers) {
	const currentNumOfMarkers = markerContainer.childElementCount;

	if (newNumOfMarkers > currentNumOfMarkers) {
		for (let i = 1; i <= newNumOfMarkers - currentNumOfMarkers; i++) {
			const clone = document.importNode(markerTemplate.content, true);
			markerContainer.append(clone);
		}
	} else {
		for (let i = 1; i <= currentNumOfMarkers - newNumOfMarkers; i++) {
			markerContainer.querySelector("div").remove();
		}
	}
}

setMarkers(12);

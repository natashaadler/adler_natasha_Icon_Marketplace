// this is a self invokiing annonymous function
// also called an IIFE
//also called a module (its a pattern)
//let toggleButton = document.querySelector(".btn");


(() => {
	console.log('hello from Music Mania');

	//find elements in the document
	//next to let is a variable can be named anything

	//this is letting us make the connection between the toggleButton and the switch-text
	// document means the webpage itself
	//let or const are the same as var
	let toggleButton = document.querySelector(".btn"),
		myHeading = document.querySelector('h1'),
		// # because its an Id
		//svgImg = document.querySelector("#badge")
	  allSVGs = document.querySelectorAll(".svg");

function changeText() {
		myHeading.textContent = "Whats up? I am script!";
}

// this function should log the ID for each SVG to the console
	function logSVG() {
		console.log(this.id)
	}

	//waiting for a click
	//things the user can do
		toggleButton.addEventListener("click", changeText);

		//svgImg.addEventLitener("click", logSVG)
		//svgImg2.addEventLitener("click", logSVG)

		//like a supermarket -- has to scan each individual item through
	allSVGs.forEach(item => item.addEventListener("click", logSVG));

	//document.querySelector('h1').textContent = "Whats Up, This is Script"

})();

// this is a self invokiing annonymous function 
// also called an IIFE
//also called a module (its a pattern)
let toggleButton = document.querySelector(".btn"); 


(() => {
	console.log('hello from JS');

	//find elements in the document
	//next to let is a variable can be named anything

	//this is letting us make the connection between the toggleButton and the switch-text
	let toggleButton = document.querySelector(".btn"), 
		myHeading = document.querySelector('h1'),
		// # because its an Id
		svgImg = document.querySelector("#badge") ;

	function logSVG() {
		console.log(this.id)
	//waiting for a click
		toggleButton.addEventListener("click", changeText);
		svgImg.addEventLitener("mouseover", logSVG)

	//document.querySelector('h1').textContent = "Whats Up, This is Script"

}();
var numColors = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var rgb = document.getElementById("rgb");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");

init();

function init(){
	setUpMode();
	setUpSquares();
	resetSquares();
}

	//mode buttons 

function setUpMode() {
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

		if(this.textContent === "Easy"){
			numColors = 3;
		}
		else{
			numColors = 6;
		}
		resetSquares();
	});
}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++){
	//add click listeners
	squares[i].addEventListener("click", function(){
		var colorClicked = this.style.backgroundColor;
		if (colorClicked === pickedColor) {
			messageDisplay.textContent = "Correct!";
			for(var i = 0; i < squares.length; i++){
				squares[i].style.backgroundColor = colorClicked;
			}
			h1.style.backgroundColor = colorClicked;
			reset.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}
}	
 

reset.addEventListener("click", function(){
	resetSquares();
});

function resetSquares(){
	messageDisplay.textContent ="";
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	rgb.textContent = pickedColor; 
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];	
		}
		else{
		squares[i].style.display = "none";
}
}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
}

function generateRandomColors(num){
	var arr = [];
	for (i=0; i < num; i++){
		var red = Math.floor(Math.random() *256);
	    var green = Math.floor(Math.random() *256);
	    var blue = Math.floor(Math.random() *256); 
	    arr[i]= "rgb(" + red + ", " + green + ", " + blue + ")";
	}
	return arr;	
}


function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


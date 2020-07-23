var numSquares = 6;
var colors = [];	
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSuqares();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
});

function setUpSuqares(){
	for(var i = 0; i < squares.length; i++){
		//click listeners for squares
		squares[i].addEventListener("click", function(){
			//color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function setUpModeButtons(){
	//mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number){
	var arr = [];
	for(var i = 0; i < number; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256); 
	var blue = Math.floor(Math.random() * 256); 
	return "rgb(" + red + ", " + green + ", " + blue +")";
}
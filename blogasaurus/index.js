console.log("running script...");

let header = document.querySelector("#header");
let img = document.querySelector("#img1");

let currentKey = -1;
let konami = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66];

function randomColor(){
	const hex="0123456789ABCDEF";
	let color = "#";
	for (i=0; i<6; i++){
		color = color+hex[Math.floor(Math.random()*16)];
	};
	return color;
};

img.addEventListener("mouseover", function(){
	img.style.height = "35%";
	img.style.width = "35%";
});

img.addEventListener("mouseout", function(){
	img.style.height = "30%";
	img.style.width = "30%";
});

header.addEventListener("click", function(){
	let color = randomColor();
	header.style.color = color;
});

window.addEventListener("click", function(e){
	let currentElement = e.target;
	let color = randomColor();
	currentElement.style.color = color;
});

window.addEventListener("keydown", function(e){
	currentKey++;
	if (konami[currentKey] != e.keyCode){
		currentKey = -1;
	};
	if (currentKey>8){
		// can change to an image using style.backgroundImage
		document.body.style.backgroundColor = "black";
	};
});


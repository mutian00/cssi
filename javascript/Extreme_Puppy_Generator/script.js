// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log(dataObject);

let button = document.querySelector("#test");
let clear = document.querySelector("#clear");
let random = document.querySelector("#random");

let clickedAll = false;
let clickedRandom = false;
let x, y;

function dispGif(gifNum){
	let source = dataObject.data[gifNum].images.original.url;
	let newImg = document.createElement("img");
	newImg.src = source;
	newImg.style.height = "200px";
	newImg.style.width = "200px";
	newImg.className = "gif";
	if (clickedRandom){
		newImg.style.top = y.toString()+"px";
		newImg.style.left = x.toString()+"px";
		newImg.style.position = "absolute";
	};
	document.body.appendChild(newImg);
};

function dispTitle(gifNum){
	let newTitle = document.createElement("p");
	newTitle.innerHTML = dataObject.data[gifNum].title;
	newTitle.className = "title";
	document.body.appendChild(newTitle);
};

function clearAll(){
	const gifs = document.querySelectorAll('.gif');
	gifs.forEach(function(gif){
		gif.parentNode.removeChild(gif);
	});
	const titles = document.querySelectorAll('.title');
	titles.forEach(function(title){
		title.parentNode.removeChild(title);
	});
	clickedAll = false;
};

function getRandom(){
	id = Math.floor(Math.random()*9);
	dispGif(id.toString());
};


//clear button
clear.addEventListener("click", function(){
	clearAll();
});


//random button
random.addEventListener("click", function(){
	clearAll();
	getRandom();
});

//original button
button.addEventListener("click", function(){
	if (!clickedAll){
		Object.keys(dataObject.data).forEach(function(key){
			dispGif(key);
			dispTitle(key);
		});
	};
	clickedAll = true;
});

//when clicking in window
window.addEventListener("click", function(e){
	if (e.target.tagName !== "BUTTON"){
		clickedRandom = true;
		x = e.pageX;
		y = e.pageY;
		console.log(x,y);
		clearAll();
		getRandom();
		clickedRandom = false;
	};
});



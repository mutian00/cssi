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

let title = document.querySelector('h1');
const images = document.querySelectorAll('.img');
let favoriteDiv = document.querySelector('#images');
let clicked = false;
let color;

function roundImg(){
	images.forEach(function(img){
		img.style.borderRadius = "50%";
	});
};

function randomColor(){
	const hex = '0123456789ABCDEF';
	color = '#';
	for (i=0; i<6; i++){
		color = color + hex[Math.floor(Math.random()*16)];
	};
	return color;
};

title.addEventListener('click', function(){
	if (!clicked){
		title.innerHTML = "Punny Title";
		clicked = true;
	} else{
		title.innerHTML = "Page Title";
		clicked = false;
	};
});

images.forEach(function(img){
	img.addEventListener('click', function(){
		roundImg();
	});
});

window.addEventListener('mouseover', function(e){
	if (e.target.tagName === "A"){
		e.target.style.color = 'red';
	};
});

window.addEventListener('mouseout', function(e){
	if (e.target.tagName === "A"){
		e.target.style.color = 'blue';
	};
});

favoriteDiv.addEventListener('click', function(){
	randomColor();
	favoriteDiv.style.backgroundColor = color;
});

window.addEventListener("keydown", (e) => {
	let keycode = e.keyCode;
	if (keycode == 32){
		location.reload();
	};
});
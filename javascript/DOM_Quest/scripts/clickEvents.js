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

console.log("Running Click Events Script");

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let challenges = {
	1: box1,
	2: box2,
	3: box3,
	4: box4,
	5: box5,
};


function colorConstant(x){
	// this way because haven't set a color yet so challenges[x].style.backgroundColor can't read
	let newColor = window.getComputedStyle(challenges[x]).getPropertyValue("background-color");
	console.log(newColor);
	let i = 1;
	while (i<4) {
		challenges[i].style.backgroundColor = newColor;
		i++;
	};
};

box1.addEventListener('click', function() {
	colorConstant(1);
});
box2.addEventListener('click', function() {
	colorConstant(2);
});
box3.addEventListener('click', function() {
	colorConstant(3);
});

function colorToggle(x){
	if (challenges[x].classList.contains('active')) {
		challenges[x].classList.remove('active');
	} else {
		challenges[x].classList.add('active');
	};
};

box4.addEventListener('click', function() {
	colorToggle(4);
});
box5.addEventListener('click', function() {
	colorToggle(5);
});


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

console.log("Running Window Events Script");

let box6 = document.querySelector('#box6');
let box6_origH = 100;
let box6_origW = 100;
let box6_currentH = box6_origH;
let box6_currentW = box6_origW;

let rect = document.querySelector('#rect');
let rect_color = window.getComputedStyle(rect).getPropertyValue("background-color")

let header = document.querySelector('#h');

window.addEventListener("keypress", (e) => {
console.log(e.keyCode);
	if (e.keyCode === 99) {
		box6.style.borderRadius = "50%";
		box6.style.height = (box6_currentH/2).toString() + "px";
		box6.style.width = (box6_currentW/2).toString() + "px";
		box6_currentH = box6_currentH/2;
		box6_currentW = box6_currentW/2;

	} else if (e.keyCode === 115) {
		box6.style.borderRadius = "0%";
		box6.style.height = box6_origH.toString() + "px";
		box6.style.width = box6_origW.toString() + "px";
		box6_currentH = 100;
		box6_currentW = 100;
	}
});

window.addEventListener("scroll", function() {
	if (document.documentElement.scrollTop > 50){
		rect.style.backgroundColor = 'black';
	} else{
		rect.style.backgroundColor = rect_color;
	};
});

window.addEventListener("scroll", function() {
	if (document.documentElement.scrollTop > 50){
		header.classList.add("visible");
		header.classList.remove("header");
	} else{
		header.classList.add("header");
		header.classList.remove("visible");
	};
});

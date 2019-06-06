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

let currentLily = 1;

let frogger = document.querySelector('#frog');
let orig_height = frog.style.height;
let orig_width = frog.style.width;
let pad1 = document.querySelector('#lilypad1');
let pad2 = document.querySelector('#lilypad2');
let pad3 = document.querySelector('#lilypad3');
let pad4 = document.querySelector('#lilypad4');
let pad5 = document.querySelector('#lilypad5');
let vis2 = true;
let pass2 = false;
let vis3 = true;
let pass3 = false;
let vis4 = true;
let pass4 = false;

setInterval(function(){
	if (!pass2) {
		pad2.style.visibility = vis2 ? "visible" : "hidden";
		vis2 = !vis2;
	} else{
		pad3.style.visibility = "visible";
	};
}, 1000);

setInterval(function(){
	if (!pass3) {
		pad3.style.visibility = vis3 ? "visible" : "hidden";
		vis3 = !vis3;
	} else {
		pad3.style.visibility = "visible";
	};
}, 500);

setInterval(function(){
	if (!pass4) {
		pad4.style.visibility = vis4 ? "visible" : "hidden";
		vis4 = !vis4;
	} else {
		pad4.style.visibility = "visible";
	};
}, 567);

frogger.addEventListener('click', (e) => {
	switch(currentLily){
		case 1:
			if (pad2.style.visibility === "hidden"){
				location.reload();
			};
			pass2 = true;
			frog.style.left = "33.5%";
			frog.style.top = "24%";
			pad1.classList.remove('active');
			pad2.classList.add('active');
			currentLily = 2;
			break;
		case 2:
			if (pad3.style.visibility === "hidden"){
				location.reload();
			};
			pass3 = true;
			frog.style.left = "50%";
			frog.style.top = "50%";
			pad2.classList.remove('active');
			pad3.classList.add('active');
			currentLily = 3;
			break;
		case 3:
			if (pad4.style.visibility === "hidden"){
				location.reload();
			};
			pass4 = true;
			frog.style.left = "68%";
			frog.style.top = "75%";
			pad3.classList.remove('active');
			pad4.classList.add('active');
			currentLily = 4;
			break;
		case 4:
			frog.style.left = "83%";
			frog.style.top = "50%";
			pad4.classList.remove('active');
			pad5.classList.add('active');

			// creates win header
			var header = document.createElement("header");
			document.body.prepend(header);
			var innerh = document.createElement("H1");
			var innert = document.createTextNode("Congratulations, you won!");
			innerh.appendChild(innert);
			header.appendChild(innerh);
			break;
	}
});

frogger.addEventListener('mouseover', (e) => {
	frog.style.height = '80px';
	frog.style.width = '80px';
});

frogger.addEventListener('mouseout', (e) => {
	frog.style.height = orig_height;
	frog.style.width = orig_width;
});

document.addEventListener("keydown", (e) => {
	let keycode = e.keyCode;
	if (keycode == 32){
		location.reload();
	};
});
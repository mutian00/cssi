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

// Use querySelector to store the div in a variable.
let redButton = document.querySelector('#red');
let greenButton = document.querySelector('#green');
let blueButton = document.querySelector('#blue');
let box = document.querySelector('#responseBox');
let clear = document.querySelector('#clear');
let list = '';

// Use addEventListener to respond to a click event.
redButton.addEventListener('click', (e) => {
  	console.log("You clicked the red button!");
	list = list + "Red "
	box.style.backgroundColor = 'red';
	box.innerHTML = list;
});

greenButton.addEventListener('click', () => {
	console.log("You clicked the green button!");
	list = list +"Green ";
	box.style.backgroundColor = 'green';
	box.innerHTML = list;
});

blueButton.addEventListener('click', () => {
	console.log("You clicked the blue button!");
	list = list + "Blue ";
	box.style.backgroundColor = 'blue';
	box.innerHTML = list;
});

clear.addEventListener('click', () => {
	console.log("cleared");
	box.style.backgroundColor = 'white';
	list = ''
	box.innerHTML = list;
});

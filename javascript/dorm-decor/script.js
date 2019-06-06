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

let poster = document.querySelector('#nature');
console.log(poster);

let chair = document.querySelector('#beanbag');
console.log(chair);
console.log(chair.id);
console.log(chair.classList);

let lighting = document.querySelector('#lightingHeader');
console.log(lighting.innerHTML);
let lavalamp = document.querySelector('#lavalamp');
console.log("I have selected the element: lavalamp. This element has the id " + lavalamp.id + " and the classes " + lavalamp.classList + ".");
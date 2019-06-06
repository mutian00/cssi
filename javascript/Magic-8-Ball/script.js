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

let ball = document.querySelector('#ball');
let inner = document.querySelector('#inner');
let answer = document.querySelector('#answer');
let ans = [['positive', ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it', 'As i see it', 'Most Likely', 'Outlook good', 'Yes', 'Signs point to yes']], 
	['negative', ['Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']], 
	['Noncommital', ['Reply hazy', 'Try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again']]];

let responseType;
let responseText;

ball.addEventListener('click', function(e){
	responseType = Math.floor((Math.random()*3)+1);
	switch(responseType){
		case 1:
			inner.style.backgroundColor = 'green';
			reponseText = Math.floor((Math.random()*10)+1);
			break;
		case 2:
			inner.style.backgroundColor = 'red';
			responseText = Math.floor((Math.random()*5)+1);
			break;
		case 3:
			inner.style.backgroundColor = 'yellow';
			responseText = Math.floor((Math.random()*6)+1);
			break;
	}
	answer.innerHTML = ans[responseType-1][1][responseText-1];
});



	
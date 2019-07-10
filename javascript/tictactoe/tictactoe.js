let turn = 0;
let moves = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let winnerExist = false;
let winner = -1;
let box0 = document.querySelector('#box0');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
var winBanner = document.createTextNode('');

function update(box){
	console.log(box);
	if(turn%2 == 0){
		box.style.backgroundImage = "url('x.png')";
		box.style.backgroundSize = 'contain';
	} else{
		box.style.backgroundImage = "url('o.jpg')";
		box.style.backgroundSize = 'contain';
	};
	turn += 1;
};

function checkGameState(){
	if(moves[0]==moves[1] && moves[0]==moves[2] && moves[0]!=-1){
		winnerExist = true;
		winner = moves[0];
	} else if(moves[3]==moves[4] && moves[3]==moves[5] && moves[3]!=-1){
		winnerExist = true;
		winner = moves[3];
	} else if(moves[6]==moves[7] && moves[6]==moves[8] && moves[6]!=-1){
		winnerExist = true;
		winner = moves[6];
	} else if(moves[0]==moves[3] && moves[3]==moves[6] && moves[0]!=-1){
		winnerExist = true;
		winner = moves[3];
	} else if(moves[1]==moves[4] && moves[1]==moves[7] && moves[1]!=-1){
		winnerExist = true;
		winner = moves[1];
	} else if(moves[2]==moves[5] && moves[2]==moves[8] && moves[2]!=-1){
		winnerExist = true;
		winner = moves[2];
	} else if(moves[0]==moves[4] && moves[0]==moves[8] && moves[0]!=-1){
		winnerExist = true;
		winner = moves[0];
	} else if(moves[2]==moves[4] && moves[2]==moves[6] && moves[2]!=-1){
		winnerExist = true;
		winner = moves[2];
	} else{};
	return [winnerExist, winner];
};

document.addEventListener("click", (e) => {
	let testId = e.srcElement.id;
	switch(testId){
		case 'box0':
			if(moves[0] == -1){
				moves[0] = turn%2;
				update(box0);
			};
			break;
		case 'box1':
			if(moves[1] == -1){
				moves[1] = turn%2;
				update(box1);
			};
			break;
		case 'box2':
			if(moves[2] == -1){
				moves[2] = turn%2;
				update(box2);
			};
			break;
		case 'box3':
			if(moves[3] == -1){
				moves[3] = turn%2;
				update(box3);
			};
			break;
		case 'box4':
			if(moves[4] == -1){
				moves[4] = turn%2;
				update(box4);
			};
			break;
		case 'box5':
			if(moves[5] == -1){
				moves[5] = turn%2;
				update(box5);
			};
			break;
		case 'box6':
			if(moves[6] == -1){
				moves[6] = turn%2;
				update(box6);
			};
			break;
		case 'box7':
			if(moves[7] == -1){
				moves[7] = turn%2;
				update(box7);
			};
			break;
		case 'box8':
			if(moves[8] == -1){
				moves[8] = turn%2;
				update(box8);
			};
			break;
	};
	console.log(moves);
	let gameStatus = checkGameState();
	if(gameStatus[0]){
		document.body.appendChild(winBanner);
		console.log(gameStatus[1]);
		if(gameStatus[1]){
			winBanner.nodeValue = 'O\'s have won';
		} else{
			winBanner.nodeValue = 'X\'s have won';
		};
	};
});


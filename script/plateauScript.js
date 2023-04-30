headPosition = 
{
	x : 12,
	y : 5,
	direction : " "
}

lastBlockBodySnakePosition = //sert pour enlever la derniere case du snake pour faire en sorte qu'il avance 
{
	x : 12,
	y : 2
}

foodPosition = 
{
	x : 0,
	y : 0,
	isOnField : false
}

var snakeSize = 3; //sans la tete 

let plateau = [
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
	];


function initPosition()
{
	for(let i = 0; i < plateau.length; i++)
	{
		for(let j = 0; j < plateau[i].length; j++)
		{
			if(plateau[i][j] === 2)
			{
				headPosition.x = i;
				headPosition.y = j; 
			}
		}
	}
}

function changeDirectionSnake(event)
{
	switch(event.code)
	{
		case "ArrowUp" :
			headPosition.direction = "left";
			break;
		case "ArrowDown":
			headPosition.direction = "right";
			break;
		case "ArrowLeft":
			headPosition.direction = "up";
			break;
		case "ArrowRight":
			headPosition.direction = "down";
			break;

	}

}

function init()
{
	dessinePlateau();
	initPosition();
	window.addEventListener("keydown", changeDirectionSnake);
	setInterval(play, 400);
}

var count = 1;
function play()
{
	initPosition();
	dessinePlateau();
	deplaceSnake();
	if(foodPosition.isOnField === false)
	{
		count += 1;
	}
	
	if(count === 10)
	{
		spawnFood();
		count =0;
	}
}

let lastDirection = "right";

function deplaceSnake() 
{
	let newX = headPosition.x;
	let newY = headPosition.y;

		if(headPosition.direction === "up")
		{
			newY = newY - 1;
		}
		if(headPosition.direction === "down")
		{
			newY = newY + 1;
			console.log(lastBlockBodySnakePosition.x,lastBlockBodySnakePosition.y);
		}	
		if(headPosition.direction === "left")
		{
			newX = newX - 1;
		}
		if(headPosition.direction === "right")
		{
			newX = newX + 1;
		}



	if(plateau[newX][newY] !== 3 && plateau[newX][newY] !== 1)//si tete du snake ne touche pas mur ou son corps
	{
		plateau[headPosition.x][headPosition.y] = 1;
		headPosition.x = newX;
		headPosition.y = newY;
		plateau[headPosition.x][headPosition.y] = 2; //head

		delteLastBlockBody();//fonction a finir 
	}
	else //sinon game over 
	{
		alert("Game over");
		clearInterval();
	}

}

function dessinePlateau()
{
	var plateauHTML = document.querySelector("#GameTable");
	plateauHTML.innerHTML = "";
	for(let i = 0; i < plateau.length; i++)
	{
		let monTr = document.createElement("tr");
		for(let j = 0; j < plateau[i].length; j++)
		{
			let monTd = document.createElement("td");
			switch(plateau[i][j])
			{
				case 0 : 
					monTd.setAttribute("class", "background");
					break;
				case 1 : 
					monTd.setAttribute("class", "snake");
					break;
				case 2 :
					monTd.setAttribute("class", "snakeHead");
					break;
				case 3 :
					monTd.setAttribute("class", "brique");
					break;
				case 4 : 
					monTd.setAttribute("class", "snakeQueue");
			}
			monTr.appendChild(monTd);
		}
		plateauHTML.appendChild(monTr);
	}
}

function deleteLastBlockBody()//fonction censé trouver dernier bloc serpent et le supprimer mais je n'ai pas trouvé le moyen de le faire
{
	for(let i = 0; i < 26; i++)
	{
		for(let j = 0; j < 21; j++)
		{
			if(plateau[j][i] === 4) //verifie si l'element a la class qui correspond a la queue
			{
				lastBlockBodySnakePosition.x = i;
				lastBlockBodySnakePosition.y = j;
			}
		}
	}
	plateau[lastBlockBodySnakePosition.x][lastBlockBodySnakePosition.y] = 0;
	//alert(lastBlockBodySnakePosition.x);
	//alert(lastBlockBodySnakePosition.y);
}

function spawnFood()
{
	if(foodPosition.isOnField === false)
	{
		let randomX = Math.floor(Math.random() * 25)+1;
		let randomY = Math.floor(Math.random() * 19)+1;
		foodPosition.x = randomX;
		foodPosition.y = randomY;
		plateau[foodPosition.x][foodPosition.y] = 5; //5 c'est le png du fruit

		foodPosition.isOnField = true;
	}

}

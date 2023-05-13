/*headPosition = 
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
*/
foodPosition = 
{
	x : 0,
	y : 0,
	isOnField : false
}

let snakeList = [{x : 12, y : 5, direction : " "}];

//var snakeSize = 3; //sans la tete 

let plateau = [
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
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
				/*headPosition.x = i;
				headPosition.y = j;*/
				snakeList[0].x = i;
				snakeList[0].y = j; 
			}
		}
	}
}

function changeDirectionSnake(event)
{
	switch(event.code)
	{
		case "ArrowUp" :
			snakeList[0].direction = "up";
			break;
		case "ArrowDown":
			snakeList[0].direction = "down";
			break;
		case "ArrowLeft":
			snakeList[0].direction = "left";
			break;
		case "ArrowRight":
			snakeList[0].direction = "right";
			break;

	}

}

function init()
{
	dessinePlateau();
	initPosition();
	window.addEventListener("keydown", changeDirectionSnake);
	setInterval(play, 200);
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

//let lastDirection = "right";
let snakeSize = 1;

function deplaceSnake() 
{
	//let newX = headPosition.x;
	//let newY = headPosition.y;
	/*for(let i = 0; i < snakeList.length; i++){


	}*/
	let newX = snakeList[0].x;
	let newY = snakeList[0].y; 

	if(snakeList[0].direction === "up")
	{
		newX = newX - 1;
	}

	if(snakeList[0].direction === "down")
	{
		newX = newX + 1;
		//console.log(lastBlockBodySnakePosition.x,lastBlockBodySnakePosition.y);
	}	

	if(snakeList[0].direction === "left")
	{
		newY = newY - 1;
	}

	if(snakeList[0].direction === "right")
	{
		newY = newY + 1;
	}

	if(plateau[newX][newY] !== 3 && plateau[newX][newY] !== 1 && plateau[newX][newY] !== 5 && plateau[newX][newY] !== 6 && plateau[newX][newY] !== 7 && plateau[newX][newY] !== 8)
	{
		plateau[snakeList[0].x][snakeList[0].y] = 0;
		snakeList[0].x = newX;
		snakeList[0].y = newY;

		plateau[snakeList[0].x][snakeList[0].y] = 2;
	}
	else if(plateau[newX][newY] == 5 || plateau[newX][newY] == 6 || plateau[newX][newY] == 7 || plateau[newX][newY] == 8)
	{
		snakeList.push({x: snakeList[0].x, y: snakeList[0].y, direction: snakeList[0].direction});
		plateau[snakeList[1].x][snakeList[1].y] = 1;
		snakeList[0].x = newX;
		snakeList[0].y = newY;
		console.log(snakeList[1]);
		snakeSize = snakeSize + 1;

		document.getElementById("Size").innerHTML = "Snake Size :" + snakeSize;
	}

	else
	{
		gameover("file:///C:/Users/bainm/Documents/GitHub/Snake/img/gameover.jpg");
	}


/*
	if(plateau[newX][newY] !== 3 && plateau[newX][newY] !== 1)//si tete du snake ne touche pas mur ou son corps
	{
		plateau[snakeList[0].x][snakeList[0].y] = 1;
		snakeList[0].x = newX;
		snakeList[0].y = newY;
		plateau[snakeList[0].x][snakeList[0].y] = 2; //head

		//delteLastBlockBody();//fonction a finir 
	}
	else //sinon game over 
	{
		alert("Game over");
		clearInterval();
	}
*/
}

function gameover(src) {
  // Créer un nouvel élément <img>
	window.removeEventListener("keydown", changeDirectionSnake);//empeche de bouger le serpent
	spawnFood = function(){}//empecher le spawn de food
	var img = document.createElement("img");

  // Définir la source de l'image
	img.src = src;

  // Définir les styles CSS pour positionner l'image au centre de l'écran
	img.style.position = "fixed";
	img.style.top = "50%";
	img.style.left = "50%";
	img.style.transform = "translate(-50%, -50%)";
	img.style.border = "5px solid #51F200";

  // Ajouter l'élément <img> au corps de la page
	document.body.appendChild(img);

	setTimeout(function()
	{
		var button = document.createElement("img");
		img.src = "file:///C:/Users/bainm/Documents/GitHub/Snake/img/start.png";

		img.style.position = "fixed";
		img.style.width ="100px";
		img.style.top ="67%";
		img.style.height = "auto";
		img.style.border ="none";
		//img.id ="restart";
		img.addEventListener("mouseover", function()
		{
			img.style.width = "110px";
		});

		img.addEventListener("mouseout", function()
		{
			img.style.width = "100px";
		});

		img.addEventListener("click", function()
		{
			location.reload();
		})

		document.body.appendChild(img);

		//button.setAttribute("id","restart");
	}, 2000)
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
				case 5 : 
					monTd.setAttribute("class", "pomme");
					break;
				case 6:
					monTd.setAttribute("class", "poire");
					break;
				case 7:
					monTd.setAttribute("class", "pasteque");
					break;
				case 8:
					monTd.setAttribute("class", "banane");
					break;	
			}
			monTr.appendChild(monTd);
		}
		plateauHTML.appendChild(monTr);
	}
}

/*function deleteLastBlockBody()//fonction censé trouver dernier bloc serpent et le supprimer mais je n'ai pas trouvé le moyen de le faire
{


}
*/
let typeFood = 5;

function spawnFood()// ne pas spawn n'importe ou
{
	if(foodPosition.isOnField === false)
	{
		let randomX = Math.floor(Math.random() * 25)+1;
		let randomY = Math.floor(Math.random() * 19)+1;

		while(plateau[randomX][randomY] === 3 || plateau[randomX][randomY] === 1 || plateau[randomX][randomY] === 2)//pour ne pas que la food spawn sur un mur ou sur le snake
		{
			randomX = Math.floor(Math.random() * 25)+1;
			randomY = Math.floor(Math.random() * 19)+1;
		}

		foodPosition.x = randomX;
		foodPosition.y = randomY;
		if(typeFood === 9)
		{
			typeFood = 5;
		}
		plateau[foodPosition.x][foodPosition.y] = typeFood; //5 c'est le png du fruit

		foodPosition.isOnField = true;

		typeFood = typeFood + 1;
	}

}

let snakeList = [{x: 1, y: 1, direction: "right"}];//cree une liste qui va contenir toutes les positions du serpent

foodPosition = 
{
	x : 0,
	y : 0,
	isOnField : false //au debut il n'y a pas de fruits en jeu 
}




let plateau = [
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
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
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
	];


	function init() //appelé au chargement de la page
	{
		dessinePlateau(); //creer le plateau et attribue des class aux diffrentes cases du plateau
		window.addEventListener("keydown", changeDirectionSnake); //donne un attribue aux touches directionnelles 
		setInterval(play, 200); //plateau se met a jour toutes les 200ms
	}


	function play()
	{
		dessinePlateau();
		moveSnake();//met a jour les nouvelles positions du serpent + gere la fin de partie 
		spawnFood();// fait spawn aléatoirement fruits si il n'y en a pas deja sur le plateau 
	}






	function changeDirectionSnake(event) 
	{
		switch (event.code) {
			case "ArrowUp":
				if (snakeList[0].direction !== "down") {
					snakeList[0].direction = "up";
				}
				break;
			case "ArrowDown":
				if (snakeList[0].direction !== "up") {
					snakeList[0].direction = "down";
				}
				break;
			case "ArrowLeft":
				if (snakeList[0].direction !== "right") {
					snakeList[0].direction = "left";
				}
				break;
			case "ArrowRight":
				if (snakeList[0].direction !== "left") {
					snakeList[0].direction = "right";
				}
				break;
		}
	}



	function dessinePlateau() {
		var plateauHTML = document.querySelector("#GameTable"); // Récupère l'élément HTML qui représente le plateau de jeu
		plateauHTML.innerHTML = ""; // Efface le contenu précédent du plateau
	
		for (let i = 0; i < plateau.length; i++) {
			let monTr = document.createElement("tr"); // Crée une nouvelle ligne dans le tableau HTML
	
			for (let j = 0; j < plateau[i].length; j++) 
			{
				let monTd = document.createElement("td"); // Crée une nouvelle cellule dans la ligne
	
				switch (plateau[i][j]) //attribue une image de fond a la case courante en fonction de la valeur donnée a cette case du tableau
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
					break;
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
	
				monTr.appendChild(monTd); // Ajoute la cellule à la ligne
			}
	
			plateauHTML.appendChild(monTr); // Ajoute la ligne au plateau de jeu
		}
		 
		for (let i = 0; i < snakeList.length; i++) // Mettre à jour les classes pour représenter la tête et le corps du serpent
		{
			let snakePart = snakeList[i];
			if (i === 0) //si c'est la tete du serpent
			{
				let cell = plateauHTML.rows[snakePart.x].cells[snakePart.y];
				cell.setAttribute("class", "snakeHead"); 
			} 
			else 
			{
				let cell = plateauHTML.rows[snakePart.x].cells[snakePart.y];
				cell.setAttribute("class", "snake");
			}
		}
	}
	




let snakeSize = 1; //pour le compteur

	function moveSnake() 
	{
		// Obtenir la direction actuelle de la tête du serpent
		let direction = snakeList[0].direction;
	
		// Calculer les nouvelles coordonnées de la tête du serpent en fonction de la direction
		let newHead = { x: snakeList[0].x, y: snakeList[0].y };
	
		if (direction === "up") 
		{
			newHead.x--;
		} 
		else if (direction === "down") 
		{
			newHead.x++;
		} 
		else if (direction === "left") 
		{
			newHead.y--;
		} 
		else if (direction === "right") 
		{
			newHead.y++;
		}
	
		// Vérifier les collisions avec les murs, le corps du serpent ou les obstacles
		if (
			plateau[newHead.x][newHead.y] === 3 || //collision avec mur
			plateau[newHead.x][newHead.y] === 2 //collision avec son corps
		) 
		{
			gameover();
			return; //fin du jeu 
		}
	
		// Déplacer le serpent
		snakeList.unshift({ x: newHead.x, y: newHead.y, direction: direction });//ajoute un nouvel element au debut de la liste -> nouvelle tete 
	
		if (newHead.x !== foodPosition.x || newHead.y !== foodPosition.y)//si on ne tombe pas sur un fruit
		{
			let tail = snakeList.pop(); //stock le dernier element de la liste -> queue 
			plateau[tail.x][tail.y] = 0;//puis le supprime
		} 
		else //si on tombe sur un fruit -> le programme ne va pas supprimer la derniere case de snakeList ce qui va augmenter de 1 la taille du serpent
		{
			//pour le compteur
			snakeSize++;
			document.getElementById("Size").innerHTML = "Snake Size :" + snakeSize;
			foodPosition.isOnField = false; //il n'y a plus de fruit sur le plateau, il faut donc en refaire apparaitre un
		}
	
		// Mettre à jour l'affichage du serpent sur le plateau
		for (let i = 0; i < plateau.length; i++) 
		{
			for (let j = 0; j < plateau[i].length; j++) 
			{
				if (plateau[i][j] === 1 || plateau[i][j] === 2) {
					plateau[i][j] = 0; // Réinitialiser les cases du serpent sur le plateau
				}
			}
		}
	
		for (let i = 0; i < snakeList.length; i++) 
		{
			let snakePart = snakeList[i];
			if (i === 0) 
			{
				plateau[snakePart.x][snakePart.y] = 1; // Tête du serpent
			} 
			else 
			{
				plateau[snakePart.x][snakePart.y] = 2; // Partie du corps du serpent
			}
		}
	}

function gameover() 
{

	window.removeEventListener("keydown", changeDirectionSnake);//empeche de bouger le serpent

	spawnFood = function(){}//empecher le spawn de food

	// Créer un nouvel élément <img>
	var img = document.createElement("img");

  // Définir la source de l'image
	img.src = "../img/gameover.jpg";

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
		img.src = "../img/start.png";

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
			location.reload();//recharge la page pour restart le jeu
		})

		document.body.appendChild(img);//ajoute l'image au corps de la page

	}, 2000)//boutton apparait au bout de 2sec
}
	

let typeFood = 5;//on commence par une pomme

function spawnFood() 
{
	if(foodPosition.isOnField === false)//si il n'y a plus de fruits sur le plateau
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

		if(typeFood === 9)//quand on a fait les 4 fruits differents on revient a la pomme
		{
			typeFood = 5;
		}
		plateau[foodPosition.x][foodPosition.y] = typeFood;

		foodPosition.isOnField = true;//il y a un fruit sur le plateau

		typeFood = typeFood + 1;
	}

}

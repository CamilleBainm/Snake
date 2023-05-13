let snakeList = [{x: 1, y: 1, direction: "right"}];

foodPosition = 
{
	x : 0,
	y : 0,
	isOnField : false
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


	function init(){
		dessinePlateau();
		window.addEventListener("keydown", changeDirectionSnake);
		setInterval(play, 200);
	}


	function play(){
		dessinePlateau();
		moveSnake();
		spawnFood();
	}






	function changeDirectionSnake(event) {
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
	
			for (let j = 0; j < plateau[i].length; j++) {
				let monTd = document.createElement("td"); // Crée une nouvelle cellule dans la ligne
	
				switch (plateau[i][j]) {
					case 0:
						monTd.setAttribute("class", "background"); // Cellule de fond
						break;
	
					case 1:
						monTd.setAttribute("class", "snakeHead"); // Tête du serpent
						break;
	
					case 2:
						monTd.setAttribute("class", "snake"); // Partie du corps du serpent
						break;
	
					case 3:
						monTd.setAttribute("class", "brique"); // Obstacle
						break;
	
					case 5:
						monTd.setAttribute("class", "food"); // Nourriture
						break;
				}
	
				monTr.appendChild(monTd); // Ajoute la cellule à la ligne
			}
	
			plateauHTML.appendChild(monTr); // Ajoute la ligne au plateau de jeu
		}
		 // Mettre à jour les classes pour représenter la tête et le corps du serpent
		 for (let i = 0; i < snakeList.length; i++) {
			let snakePart = snakeList[i];
			if (i === 0) {
			  let cell = plateauHTML.rows[snakePart.x].cells[snakePart.y];
			  cell.setAttribute("class", "snakeHead");
			} else {
			  let cell = plateauHTML.rows[snakePart.x].cells[snakePart.y];
			  cell.setAttribute("class", "snake");
			}
		  }
	}
	





	function moveSnake() {
		// Obtenir la direction actuelle de la tête du serpent
		let direction = snakeList[0].direction;
	
		// Calculer les nouvelles coordonnées de la tête du serpent en fonction de la direction
		let newHead = { x: snakeList[0].x, y: snakeList[0].y };
	
		if (direction === "up") {
			newHead.x--;
		} else if (direction === "down") {
			newHead.x++;
		} else if (direction === "left") {
			newHead.y--;
		} else if (direction === "right") {
			newHead.y++;
		}
	
		// Vérifier les collisions avec les murs, le corps du serpent ou les obstacles
		if (
			newHead.x < 0 ||
			newHead.x >= plateau.length ||
			newHead.y < 0 ||
			newHead.y >= plateau[0].length ||
			plateau[newHead.x][newHead.y] === 3 ||
			plateau[newHead.x][newHead.y] === 2
		) {
			return; // La nouvelle position n'est pas valide, terminer la fonction
		}
	
		// Déplacer le serpent
		snakeList.unshift({ x: newHead.x, y: newHead.y, direction: direction });
	
		if (newHead.x !== foodPosition.x || newHead.y !== foodPosition.y) {
			let tail = snakeList.pop();
			plateau[tail.x][tail.y] = 0;
		} else {
			foodPosition.isOnField = false;
		}
	
		// Mettre à jour l'affichage du serpent sur le plateau
		for (let i = 0; i < plateau.length; i++) {
			for (let j = 0; j < plateau[i].length; j++) {
				if (plateau[i][j] === 1 || plateau[i][j] === 2) {
					plateau[i][j] = 0; // Réinitialiser les cases du serpent sur le plateau
				}
			}
		}
	
		for (let i = 0; i < snakeList.length; i++) {
			let snakePart = snakeList[i];
			if (i === 0) {
				plateau[snakePart.x][snakePart.y] = 1; // Tête du serpent
			} else {
				plateau[snakePart.x][snakePart.y] = 2; // Partie du corps du serpent
			}
		}
	}
	



	function spawnFood() {
		if(plateau[foodPosition.x][foodPosition.y] !== 2 && plateau[foodPosition.x][foodPosition.y] !== 1)
		{
			if (foodPosition.isOnField === false) {
				let randomX, randomY;
				do {
					randomX = Math.floor(Math.random() * 23) + 1;
					randomY = Math.floor(Math.random() * 17) + 1;
				} while (plateau[randomX][randomY] !== 0);
				
				foodPosition.x = randomX;
				foodPosition.y = randomY;
				plateau[foodPosition.x][foodPosition.y] = 5; // 5 représente le fruit
				foodPosition.isOnField = true;
				
			}
		}
	  }




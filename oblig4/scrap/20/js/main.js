var enemyYPositions = [];	//empty square brackets means new empty array
var enemyXPositions = [];
var avatarX = 0;
var avatarY = 0;
var avatarImage;
var enemyImage;
var ticksSurvived = 0;
var mostTicksSurvived;

function oppsett() {
	if (localStorage.getItem("bestScore")) {
		mostTicksSurvived = localStorage.getItem("bestScore");
	}
	var ctxSpill = document.getElementById("ctxSpill");
	avatarImage = new Image();
	enemyImage = new Image();
	enemyImage.src = "img/enemy.png";
	avatarImage.src = "img/avatar.png";

	ctxSpill.getContext("2d").drawImage(avatarImage, Math.random() * 100, Math.random() * 100);

	ctxSpill.addEventListener("mousemove", handleMouseMovement);
	setInterval(handleTick, 25);
}

function startNewGame() {
	enemyXPositions = [];
	enemyYPositions = [];
	ticksSurvived = 0;
}

function handleMouseMovement(mouseEvent) {
	avatarX = mouseEvent.offsetX;
	avatarY = mouseEvent.offsetY;
}

function handleTick() {
	var ctxSpill = document.getElementById("ctxSpill");
	var currentEnemyNumber = 0;
	var numberOfEnemies = enemyXPositions.length;

	if (Math.random() < 1/20)
	{
		enemyYPositions.push(0);
		enemyXPositions.push(Math.random() * 400);
	}

	while (currentEnemyNumber < numberOfEnemies) {
		enemyYPositions[currentEnemyNumber] = enemyYPositions[currentEnemyNumber] + 1;
		currentEnemyNumber = currentEnemyNumber + 1;
	}

	ctxSpill.width = 400;		//this erases the contents of the canvas
	ctxSpill.getContext("2d").drawImage(avatarImage, avatarX, avatarY);

	currentEnemyNumber = 0;
	while (currentEnemyNumber < numberOfEnemies) {
		ctxSpill.getContext("2d").drawImage(enemyImage, enemyXPositions[currentEnemyNumber], enemyYPositions[currentEnemyNumber]);
		currentEnemyNumber = currentEnemyNumber + 1;
	}

	ctxSpill.getContext("2d").font = "18px Iceland";
	ctxSpill.getContext("2d").textBaseline = "top";
	ctxSpill.getContext("2d").fillText("Score: " + ticksSurvived, 5, 5);

	currentEnemyNumber = 0;
	while (currentEnemyNumber < numberOfEnemies) {
		if ( ( (avatarX < enemyXPositions[currentEnemyNumber] && enemyXPositions[currentEnemyNumber] < avatarX + 30) || (enemyXPositions[currentEnemyNumber] < avatarX && avatarX < enemyXPositions[currentEnemyNumber] + 30) ) && ( (avatarY < enemyYPositions[currentEnemyNumber] && enemyYPositions[currentEnemyNumber] < avatarY + 33) || (enemyYPositions[currentEnemyNumber] < avatarY && avatarY < enemyYPositions[currentEnemyNumber] + 30) ) ) {
			alert("You hit an enemy! You survived " + ticksSurvived + " ticks.");
			if (ticksSurvived > mostTicksSurvived) {
				alert("You beat your old high score by " + (ticksSurvived - mostTicksSurvived) + " ticks!");
				mostTicksSurvived = ticksSurvived;
				localStorage.setItem("bestScore", mostTicksSurvived);
			}
			startNewGame();
		}
		currentEnemyNumber = currentEnemyNumber + 1;
	}

	ticksSurvived = ticksSurvived + 1;
}

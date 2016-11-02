var x,
	y,
	start = 0,
	c = 0,
	score = 0,
	store = window.localStorage;
function checkCheat(event) {
	if(event.clientX < 25 || event.clientX > document.body.clientWidth - 25 || event.clientY < 25 || event.clientY > document.body.clientHeight - 25) {
		start = 2;
	} else{}
}
function create() {
	if(c === 1) {
		var a = document.createElement("div");
		a.setAttribute("class", "objects");
		a.setAttribute("style", "left: " + Math.round(Math.random() * document.body.clientWidth) + "px;");
		a.setAttribute("onmousemove", "start = 2;");
		document.body.appendChild(a);
	} else{}
}
function deleteObject() {
	for(var b = 0; b < document.getElementsByClassName("objects").length; b++) {
		if(document.getElementsByClassName("objects")[b].offsetTop > document.body.clientHeight) {
			document.getElementsByClassName("objects")[b].outerHTML = "";
			if(start === 1) {
				score++;
			}
			else {
				score = 0;
			}
		} else{}
	}
}
function cHighscore() {
	if(store.getItem("highscore") < score) {
		store.setItem("highscore", score);
	} else{}
}
window.onload = function() {
	if(store.getItem("highscore")){}
	else {
		store.setItem("highscore", 0);
	}
}
setInterval(function() {
	document.getElementById("score").innerHTML = score;
	document.getElementById("highscore").innerHTML = store.getItem("highscore");
	deleteObject();
	cHighscore();
	if(start === 1) {
		document.getElementById("start").style.opacity = "0";
		c = 1;
	}
	else if(start === 2) {
		document.getElementById("start").style.opacity = "1";
		c = 0;
	} else{}
}, 1);
setInterval(function() { create(); }, 15);
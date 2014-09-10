window.onload = function(){
	
	var loading_bar = document.getElementById("loading_bar");
	subscribe("resourceLoaded",function(){
		loading_bar.style.width = Math.floor((_resourcesLoaded/_resourcePromises.length)*100)+"%";
	});

	Q.all(_resourcePromises).then(function(){
		setTimeout(function(){
			document.getElementById("game").setAttribute("screen","blank");
		},1000);
		setTimeout(function(){
			document.getElementById("game").setAttribute("screen","game");
			Start();
		},1500);
	});

    var playerChoices = document.getElementById("choices");

};

var fadeOut = document.getElementById("fade-out");
fadeOut.addEventListener('webkitTransitionEnd', function(event) {
    ClearScene();
    fadeOut.className="";
}, false);


var fadeToGwama = function() {
    fadeOut.className = "active";
    window.setTimeout(meetGwama,2000);
};

var fadeScene = function() {
    fadeOut.className = "active";
    window.setTimeout('randomBackground()',800);
};

var randomBackground = function() {
    var ran = Math.floor(Math.random()*2000)*-1; ran = ran+"px";
    document.body.style.backgroundPositionX = ran;
};



var socialShare = function() {
    fadeScene();
    Clear();
    N("add social media sharing functionality...")
};

//tracks items you'll need to kill Gwama and win the game
var requiredItems = {};



var newGame = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(Start,0);
};

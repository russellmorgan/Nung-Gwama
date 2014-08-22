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

};

//restart the game because you died. Don't die.
var restartGame = function() {
    fadeScene();
    Clear();
    Start();
};

//you totes won! congrats!
var wonGame = function() {
    N("Thank you for playing.");
    N("The end.");

    Choose({
        "See the Credits":showCredits,
        "Share this experience":socialShare
    })
};

var showCredits = function() {
    fadeScene();
    Clear();
    N("Credits here...")
};

var socialShare = function() {
    fadeScene();
    Clear();
    N("add social media sharing functionality...")
};

//tracks items you'll need to kill Gwama and win the game
var requiredItems = {
    needles:false,
    manure:false
};

//You died somehow, nice job...
var gameFail = function() {
    fadeScene();
    Clear();
    Choose({
        "Try Again":restartGame
    })
    //TODO: load a 'you are dead' screen & animation
};

//Nung Gwama came to eat you
var gwammaEatsYou = function() {
    N("The Nung Gwama arrived that evening and ate he woman up in the most disgusting way.");
    gameFail();
};

var fadeScene = function() {
    //TODO: Figure out how to fade out the container with just pure css/js
};
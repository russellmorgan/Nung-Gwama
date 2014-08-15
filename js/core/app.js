//Functions that game needs in general

//You died somehow, nice job...
var gameFail = function() {
    fadeScene();
    queue(ClearDialogue,1500);
    Clear();
    //TODO: load a 'you are dead' screen & animation
};

var fadeScene = function() {
    //TODO: Figure out how to fade out the container with just pure css/js
};
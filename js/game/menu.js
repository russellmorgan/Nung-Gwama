function Start(){

	gameObj = {};
	
	/////// SET UP SCENE ////////

	//Show("background","intro");
	//Show("nicky","coffee_nicky_still");

	//PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////
	N("Once, long ago in China, a poor young woman decided to honor her parents by taking them some rice cakes.");
	N("The path to their home went by a very dark grove of bamboo trees.");
    N("People said a monster called the Terrible Nung Gwama lived there.");
    N("They said the monster ate animals of all kinds and also ate people.");
    N("They said it was a bone cruncher.");
    N("It crunched and chewed up everything, hair bones and all.")

	Choose({
		"Walk to parents": startStory,
		"Stay home": noStory,
        "** dev use: skip to the end":scene8
	});

}

function noStory() {
    queue(fadeScene,0);
    Wait(2000);
    queue(gameFail,0);
};

function startStory() {
    N("It was a long way from her house to theirs, so she went as fast as she could on her tiny feet.");
    window.setTimeout(fadeToGwama,3000);
};



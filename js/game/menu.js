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
        "*! dev test link":scene9
	});

}

function noStory() {
    queue(fadeScene,0);
    Wait(2000);
    N("And so the woman decided it was best if she stayed home, rather than risk an encounter with such a terrible monster.");
    N("In another village down the path her parents often wondered why their daughter did not visit.");
    N("They had found a wonderful husband for her and no feared that she would die alone and unloved.");
    Wait(2000);
    Choose({
        "Find your courage":newGame,
        "See the Credits":showCredits
    })

};

function startStory() {
    N("It was a long way from her house to theirs, so she went as fast as she could on her tiny feet.");
    window.setTimeout(fadeToGwama,3000);
};

//Game Conditions

var wonGame = function() {
    queue(fadeScene,0);
    Wait(2000);
    N("Thank you for playing.");
    N("The End.");

    Choose({
        "See the Credits":showCredits,
        "Share this experience":socialShare,
        "Replay":newGame
    })
};


var showCredits = function() {
    queue(fadeScene,0);
    Wait(2000);
    N("For Harry, dad loves you.");
    N("Code by Russell Morgan, Subreference Studios");
    N("Technical thanks go out to Nicky Case and his Coming Out Simulator on which this code is based.");
    Choose({
        "Replay":newGame
    })
};

//You died somehow, nice job...
var gameFail = function() {
    N("Game failed, need to put some conditionals based on fail reason.")
    Choose({
        "Try Again":newGame
    })
};
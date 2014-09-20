function Start(){

	//gameObj = {};

	//////////////////////////////
    N("Once, long ago in China, a poor young woman decided to honor her parents by taking them some rice cakes.");
	N("The path to their home went by a very dark grove of bamboo trees.");
    N("People said a monster called the Terrible Nung Gwama lived there.");
    N("They said the monster ate animals of all kinds and also ate people.");
    N("They said it was a bone cruncher.");
    N("It crunched and chewed up everything, hair bones and all.")

	Choose({
		"Visit parents": startStory,
		"Stay home": noStory,
        "jump to end":scene9
	});

}

function noStory() {
    queue(fadeScene,0);
    Wait(2000);
    N("And so the woman decided it was best if she stayed home, rather than risk an encounter with such a terrible monster.");
    N("In another village down the path her parents often wondered why their daughter did not visit.");
    N("They had found a wonderful husband for her and now feared that she would die alone and unloved.");
    Wait(2000);
    Choose({
        "Find your courage":newGame,
        "See the Credits":showCredits
    })

};

function startStory() {
    A("You choose to visit your parents");
    Wait(1000);
    N("It was a long way from her house to theirs, so she went as fast as she could on her tiny feet.");
    queue(fadeScene,0);
    Wait(2000);
    queue(meetGwama,0);
};

//Game Conditions

var wonGame = function() {
    queue(fadeScene,0);
    Wait(2000);
    N("And so, instead of being eaten by a terrible monster, the woman found herself safe and sound.");
    N("And there was a rich reward for the skin and bones of the Nung Gwama, which had been a danger to the whole countryside.");
    N("So at last the poor woman had enough money to live happily ever after, and to take good care of her parents, too.");
    Wait(2000);
    N("Thank you for playing.");
    N("The End.");

    Choose({
        "See the Credits":showCredits,
        "Play again":newGame
    })
};


var showCredits = function() {
    queue(fadeScene,0);
    Wait(2000);
    N("For Harry, dad loves you.");
    N("Code by Russell Morgan, Subreference Studios");
    N("Technical thanks go out to Nicky Case and his Coming Out Simulator on which this code is based.");
    N("Based on a retelling by Leslie Bonnet")
    Choose({
        "Play again":newGame
    })
};

//You died somehow, nice job...
var gameFail = function() {
    //player tried to run away
    if(deathType === "ran") {
        N("Despite his floppy feet the Nung Gwama is very fast.");
    }
    N("You failed to outsmart the Nung Gwama.")
    N("The End.");

    Choose({
        "Play again":newGame
    })
};
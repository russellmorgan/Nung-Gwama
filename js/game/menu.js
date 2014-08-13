function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	//Show("background","intro");
	//Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////
	N("Once, long ago in China, a poor young woman decided to honor her parents by taking them some rice cakes.");
	N("The path to their home went by a very dark grove of bamboo trees.");
    N("People said a monster called the Terrible Nung Gwama lived there.");
    N("They said the monster ate animals of all kinds and also ate people.");
    N("They said it was a bone cruncher.");
    N("It crunched and chewed up everything, hair bones and all.")

	Choose({
		"Walk to parents": startStory,
		"Change your mind and stay home": function(){
			changeMind();
		}
	});

}

function startStory() {
    A("It was a long way from her house to theirs, so she went as fast as she could on her tiny feet.")
    fadeScene();
    queue(ClearDialogue,0);
    Clear();
    meetGwama();
};

function changeMind() {
    alert("ha, you are scared!");
};

function fadeScene() {
    //TODO: Figure out a native way to fade, or get a library that will work with this code....
    return;
}

function Play(message){
	//SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("Jumping right into it! Great!");
		N("No messing around with reading the Credits or the About This Game sections or--");
		p("Shush.");
		N("Fine, fine.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("Why did you make that a clickable option, when it was the only option left.");
		N("NO IDEA");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("Yes, let's!");
	}

	N("Let's travel back four years ago, to 2010...");
	p("That was FOUR years ago?!");
	N("...to the evening that changed my life forever.");

	N("Tell me, dear player, how do you think this all ends?");

	Choose({
		"With flowers and rainbows and gay unicorns?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("Yes. That is exactly how this game ends.");
			p("Really?");
			N("No.");
			Play_2();
		},
		"Apparently, with you redditing at Starbucks.": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("Hey, I'm coding on this laptop. Turning my coming-of-age story into the game you're playing right now.");
			p("Naw, you're probably procrastinating.");
			N("Look who's talking.");
			p("Touché, douché.");
			N("Anyway...");
			Play_2();
		},
		"IT ALL ENDS IN BLOOD": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("Uh, compared to that, I guess my story isn't that tragic.");
			N("Although that's kind of a glass one-hundredths-full interpretation.");
			p("blooooood.");
			N("Anyway...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		p("Shush.");
	}

	N("This game includes dialogue that I, my parents, and my ex-boyfriend actually said.");
	N("As well as all the things we could have, should have, and never would have said.");
	N("It doesn't matter which is which.");
	N("Not anymore.");

	Choose({
		"How can I win a game with no right answers?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("Exactly.");
			p(". . .");
			Play_3();
		},
		"You're a bit of a downer, aren't you?": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("LIFE is a bit of a downer.");
			p("So that's a yes.");
			Play_3();
		},
		"This 'true' game is full of lies?": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("Even if the dialogue was 100% accurate, it'd still be 100% lies.");
			p(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		N("Because you skipped the Credits, my (not-yet-legal) name is Nicky Case. Just so you know.");
		p("Shush.");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "This game doesn't end with gay unicorns. "; break;
		case 2: whatISay = "This game is a coming-out, a coming-of-age, a coming-to-terms. "; break;
		case 3: whatISay = "This game ends not in blood, but in tears. "; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "Sorry for being a bit of a downer."; break;
		case 2: whatISay += "And there are no right answers."; break;
		case 3: whatISay += "And it's full of lies."; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("Hey, I just said that!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("When you play...");
	N("Choose your words wisely.");
	N("Every character will remember everything you say. Or don't say.");
	p("Yeah. You even brought up my choices in this MAIN MENU.");
	N("Exactly.");

	N(". . .");
	N("Some things are hard not to remember.");
	
	Clear();
	Start_Jack_1();

}

//TODO: move this to end of game or a global icon with overlay?
function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("?");
	}
	
	N("Right, so this is a game you can make with the HTML the kids are so crazy about");
	N("Oh, and Javascript.");
	N("So it works on every computer device.");

	p("Hmmm, I'm intrigued, tell me more....");
	if($.asked_about){
		p("Tell me more...");
	}else{
		p("More about the why I would do this");
	}

	N("It means we can use this shit to make any story we want.");

	if($.asked_about){
		p("I'm confused");
	}else{
		N("Let me explain it a different way:");
	}

	N("Remember those drawings you made in a cave? In France?");
	N("Like that but with more electricity");

	if($.asked_about){
		Choose({
			"You scare me with your odd words but let's play!": Play
		});
	}else{
		Choose({
			"Errr ok let's play then?": Play,
			"Oh god why do you do this to us?": function(){
				About("Good god man, why did you bother?");
			}
		});
	}

}

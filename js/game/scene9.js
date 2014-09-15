var scene9 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(stayStill,0);
};


var stayStill = function() {
    N("The woman could not move, she was so frightened.");
    N("The Nung Gwama rushed at the door and tore it down.");

    if(requiredItems.needles === 1) {
        if(requiredItems.manure === 1) {
            N("But as he did, the needles stuck in his hands and the manure dirtied them.");
        } else {
            N("But as he did, the needles stuck in his hands.");
        }
        g("&#8220;Oh!&#8221;");
        g("&#8220;Ow!&#8221;");
        N("The monster shrieked at the top of his lungs.");
        g("&#8220;What's this? Something has stung me!&#8221;");
        if(requiredItems.manure === 1) {
            g("&#8220;And what is this dirt?&#8221;");
            g("&#8220;And this terrible smell?&#8221;");
            N("The Nung Gwama looked at his hands in disgust.");
            g("&#8220;Well, now that I'm in, I'll soon finish you off.&#8221;");
            g("&#8220;But first I'll wash my hands in this water.&#8221;");
        }
    } else {
        //NO NEEDLES
        Wait(2000);
        N("Because the woman had decided not to accept the peddler's offer of the needles the monster was now inside.");
        N("And so the Nung Gwama did as he had promised.");
        Wait(2000);
        queue(fadeScene,0);
        Wait(2000);
        queue(gameFail,0);
        return;
    }
    //NO MANURE
    if(requiredItems.manure !== 1) {
        g("&#8220;Now that I'm in, I'll soon finish you off.&#8221;");
        g("&#8220;But first I'll soak my hands in this water to get rid of the stinging.&#8221;");
    }

    Wait(2000);
    queue(fadeScene,0);
    Wait(2000);

    if(requiredItems.snakes === 1) {
        g("&#8220;Yee-ow! What now?&#8221;");
        N("Nung Gwama howled, for the snakes had just bitten him with their poisoned fangs.");
        g("&#8220;But here's a cooking pot. There will be nice warm water in that to take away this pain.&#8221;");
    } else {
        N("The monster placed his hands in the pot and felt relieved.");
        N("There were no snakes to bite him, as the woman had been to frightened to accept the gift.");
        g("&#8220;Now I will make you my dinner!&#8221;");
        Wait(2000);
        queue(fadeScene,0);
        Wait(2000);
        queue(gameFail,0);
        return;
    }

    if(requiredItems.fish === 1) {
        N("As he put his hands in the pot he screamed.");
        g("&#8220;Ooh-ouch!&#8221;");
        N("The fish had bitten his fingers.");
        g("&#8220;My fingers are bleeding!&#8221;");
        N("He hurried to the hearth to stop the bleeding with some ashes.");
    } else {
        N("Nung Gwama put his hands in the pot and soothed them.");
        N("The woman had not accepted the offer the fish, and so there was nothing to bite him.")
        g("&#8220;Alright then, it is time to fulfill my promise from earlier.&#8221;");
        Wait(2000);
        queue(fadeScene,0);
        Wait(2000);
        queue(gameFail,0);
        return;
    }

    if(requiredItems.eggs === 1) {
        N("The eggs popped in his face, and the hot bits of shell flew into his eyes.");
        g("&#8220;Oh, help!&#8221;");
        g("&#8220;I'm bleeding! I can't see!&#8221;");
        g("&#8220;Just let me get my claws on that woman. I'll certainly crunch her up for this!&#8221;");
        g("&#8220;Where are you woman?&#8221;");
    } else {
        N("There were no eggs resting in the fire to catch the monster off guard.")
        N("He placed his hands in the ashes and the bleeding quickly stopped.");
        g("&#8220;Now I will get my claws on you woman. And crunch you up for all this trouble!&#8221;");
        Wait(2000);
        queue(fadeScene,0);
        Wait(2000);
        queue(gameFail,0);
        return;
    }


    Choose({
        "Call to Nung Gwama":callGwama,
        "Stay silent":staySilent
    })
};

var callGwama = function() {
    A("You call the Nung Gwama");
    Wait(1000);
    w("&#8220;Over here.&#8221;");
    N("The Nung Gwama, who still could not see, shuffled towards the bed.");
    g("flip");
    g("flop");
    g("flip");
    g("flop");
    N("She could feel the monster's breath on her, as he was right next to the bed.")
    if(requiredItems.stone === 1) {
        Choose({
            "Cut the string": cutString,
            "Wait": staySilent
        });
    } else {
        queue(staySilent,0);
    }

};

var staySilent = function() {
    if(requiredItems.stone === 1) {
        A("You wait");
    }
    Wait(1000);
    N("The woman was too frightened to speak or move.");
    if(requiredItems.stone !== 1) {
        N("And she had not accepted the offer of the millstone to trap the monster.");
    }
    g("&#8220;Never mind, I will find you anyway.&#8221;");
    N("The monster began to search the small home.");
    g("flip");
    g("flop");
    g("&#8220;Ah, there you are, hiding in your bed!&#8221;");
    Wait(2000);
    queue(fadeScene,0);
    Wait(2000);
    queue(gameFail,0);
};

var cutString = function() {
    A("You cut the string");
    Wait(1000);
    N("As he came close by the woman cut the string &mdash;");
    Wait(1000);
    N("Down fell the millstone, right onto the Nung Gwama's back.");
    N("And down fell Nung Gwama, looking quite dead.");

    Choose({
        "Hit Nung Gwama":hitGwama,
        "Run Away":leaveGwama
    })
};

var hitGwama = function() {
    A("You hit the monster");
    Wait(1000);
    N("To make very sure, the woman gave him a few heavy bangs with the iron bar.");
    Wait(2000);
    queue(wonGame,0);
};

var leaveGwama = function() {
    deathType = "ran";
    A("You run from the house");
    Wait(1000);
    N("The woman ran far away, too frightened to see if she had really killed the Nung Gwama.");
    N("Many hours later the monster lifted the stone and stood back up.");
    g("&#8220;I will find that treacherous woman, no matter how long it takes.&#8221;");
    N("And with that he followed her trail.");
    g("flip");
    g("flop");
    g("flip");
    g("flop");
    Wait(2000);
    queue(fadeScene,0);
    Wait(2000);
    queue(gameFail,0);
}
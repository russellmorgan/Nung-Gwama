var scene9 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(stayStill,0);
};


var stayStill = function() {
    N("The woman could not move, she was so frightened.");
    N("The Nung Gwama rushed at the door and tore it down.");

    if(requiredItems.needles == 1) {
       //TODO: break apart the needles and manure statement
    }
    N("But as he did, the needles stuck in his hands and the manure dirtied them.");
    g("&#8220;Oh!&#8221;");
    g("&#8220;Ow!&#8221;");
    N("The monster shrieked at the top of his lungs.");
    g("&#8220;What's this? Something has stung me!&#8221;");
    g("&#8220;And what is this dirt?&#8221;");
    g("&#8220;And this terrible smell?&#8221;");
    N("The Nung Gwama looked at his hands in disgust.");
    g("&#8220;Well, now that I'm in, I'll soon finish you off.&#8221;");
    g("&#8220;But first I'll wash my hands in this water.&#8221;");
    Wait(2000);
    queue(fadeScene,0);
    Wait(2000);
    g("&#8220;Yee-ow! What now?&#8221;");
    N("Nung Gwama howled, for the snakes had just bitten him with their poisoned fangs.");
    g("&#8220;But here's a cooking pot. There will be nice warm water in that to take away this pain.&#8221;");
    N("As he put his hands in the pot he screamed.");
    g("&#8220;Ooh-ouch!&#8221;");
    N("The fish had bitten his fingers.");
    g("&#8220;My fingers are bleeding!&#8221;");
    N("He hurried to the hearth to stop the bleeding with some ashes.");
    N("The eggs popped in his face, and the hot bits of shell flew into his eyes.");
    g("&#8220;Oh, help!&#8221;");
    g("&#8220;I'm bleeding! I can't see!&#8221;");
    g("&#8220;Just let me get my claws on that woman. I'll certainly crunch her up for this!&#8221;");
    g("&#8220;Where are you woman?&#8221;");

    Choose({
        "Call to Nung Gwama":callGwama,
        "Stay silent":staySilent
    })
};

var callGwama = function() {
    w("&#8220;Over here.&#8221;");
    N("The Nung Gwama, who still could not see, shuffled towards the bed.");
    g("flip");
    g("flop");
    g("flip");
    g("flop");

    Choose({
        "Cut the string":cutString,
        "Wait":staySilent
    });

};

var staySilent = function() {
    N("The woman was too frightened to speak or move.");
    g("&#8220;Never mind, I will find you anyway.&#8221;");
    N("The monster began to search the small home.");
    g("flip");
    g("flop");
    g("&#8220;Ah, there you are, hiding in your bed!&#8221;");
    A("The Nung Gwama has killed you.");
    Wait(2000);
    queue(fadeScene,0);
    Wait(2000);
    queue(gameFail,0);
};

var cutString = function() {
    N("As he came close by the woman cut the string");
    N("Down fell the millstone, right onto the Nung Gwama's back.");
    N("And down fell Nung Gwama, looking quite dead.");

    Choose({
        "Hit Nung Gwama":hitGwama,
        "Run Away":leaveGwama
    })
};

var hitGwama = function() {
    N("To make very sure, the woman gave him a few heavy bangs with the iron bar.");
    N("And so, instead of being eaten by a terrible monster, the woman found herself safe and sound.");
    N("And there was a rich reward for the skin and bones of the Nung Gwama, which had been a danger to the whole countryside.");
    N("So at last the poor woman had enough money to live happily ever after, and to take good care of her parents, too.");
    Wait(2000);
    queue(fadeScene,0);
    Wait(2000);
    queue(wonGame,0);
};

var leaveGwama = function() {
    N("The woman ran from her house, too frightened to see if she had really killed Nung Gwama.");
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
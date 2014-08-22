/**
 * Created by russellmorgan on 8/22/14.
 * Where we have our final match with the Terrible Nung Gwama
 */


var stayStill = function() {
    fadeScene();
    Clear();
    N("The woman could not move, she was so frightened.");
    N("The Nung Gwama rushed at the door and tore it down.");
    N("But as he did, the needles stuck in his hands and the manure dirtied them.");
    g("Oh!");
    g("Ow!");
    N("The monster shrieked at the top of his lungs.");
    g("What's this? Something has stung me!");
    g("And what is this dirt?");
    g("And this terrible smell?");
    N("The Nung Gwama looked at his hands in disgust.");
    g("Well, now that I'm in, I'll soon finish you off.");
    g("But first I'll wash my hands in this water.");
    //pause here....
    Clear();
    g("Yee-ow! What now?");
    N("Nung Gwama howled, for the snakes had just bitten him with their poisoned fangs");
    g("But here's a cooking pot. There will be nice warm water in that to take away this pain.");
    N("As he put his hands in the pot he screamed.");
    g("Ooh-ouch!");
    N("The fish had bitten his fingers");
    g("My fingers are bleeding!");
    N("He hurried to the hearth to stop the bleeding with some ashes.");
    N("The eggs popped in his face, and the hot bits of shell flew into his eyes.");
    g("Oh, help!");
    g("I'm bleeding! I can't see!");
    g("Just let me get my claws on that woman. I'll certainly crunch her up for this!");
    g("Where are you woman?");

    Choose({
        "Call to Nung Gwama":callGwama,
        "Stay silent":staySilent
    })
};

var callGwama = function() {
    w("Over here");
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
    g("Never mind, I will find you anyway");
    N("The monster began to search the small home.");
    g("flip");
    g("flop");
    g("Ah, there you are, hiding in your bed!");
    A("The Nung Gwama has killed you.");
    fadeScene();
    Clear();
    restartGame();
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
    fadeScene();
    Clear();
    wonGame();
};

var leaveGwama = function() {
    N("The woman ran from her house, too frightened to see if she had really killed Nung Gwama.");
    N("Many hours later the monster lifted the stone and stood back up.");
    g("I will find that treacherous woman, no matter how long it takes");
    N("And with that he followed her trail");
    g("flip");
    g("flop");
    g("flip");
    g("flop");
    fadeScene();
    Clear();
    restartGame();
}
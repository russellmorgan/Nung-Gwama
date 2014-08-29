var scene6 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(meetEggSeller,0);
};

var meetEggSeller = function() {
    N("An egg seller came by next, shouting:");
    p("&#8220;Eggs!&#8221;");
    p("&#8220;Fine eggs for sale!&#8221;");
    N("He too, asked what was wrong. When he was told, he scratched his head and thought very hard.");
    p("&#8220;You must take these few eggs.&#8221;");
    p("&#8220;Put them in the ashes of your fire.&#8221;");
    p("&#8220;If the Nung Gwama is bitten by the snakes and the fish, his fingers will bleed.&#8221;");
    p("&#8220;Then he will want to put them in the ashes to stop that bleeding.&#8221;");
    p("&#8220;If he does that, the eggs will burst in his face.&#8221;");
    p("&#8220;That should scare him out of his wickedness.&#8221;");

    Choose({
        "Accept the eggs":takeEggs,
        "Do not take the eggs":refuseEggs
    })
};

var refuseEggs = function() {
    N("The woman did not think just two eggs would scare the Nung Gwama and refused.");
    Wait(3000);
    queue(scene7,0);
};

var takeEggs = function() {
    requiredItems.eggs = 1;
    N("The woman did not think it would be so easy to scare the terrible Nung Gwama, but she thanked him and took the eggs.");
    N("She then cried louder than ever.");
    Wait(3000);
    queue(scene7,0);
};
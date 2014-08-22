/**
 * Created by russellmorgan on 8/22/14.
 */

var meetEggSeller = function() {
    N("An egg seller came by next, shouting,");
    p("Eggs!");
    p("Fine eggs for sale!");
    N("He too, asked what was wrong. When he was told, he scratched his head and thought very hard.");
    p("You must take these few eggs.");
    p("Put them in the ashes of your fire.");
    p("If the Nung Gwama is bitten by the snakes and the fish, his fingers will bleed.");
    p("Then he will want to put them in the ashes to stop that bleeding.");
    p("If he does that, the eggs will burst in his face.");
    p("That should scare him out of his wickedness");

    Choose({
        "Accept the eggs":takeEggs,
        "Do not take the eggs":refuseEggs
    })
};

var refuseEggs = function() {
    N("The woman did not think just two eggs would scare the Nung Gwama and refused.");
    fadeScene();
    Clear();
    meetStonePedlar();
};

var takeEggs = function() {
    N("The woman did not think it would be so easy to scare the terrible Nung Gwama, but she thanked him and took the eggs.");
    N("She then cried louder than ever.");
    fadeScene();
    Clear();
    meetStonePedlar();
};
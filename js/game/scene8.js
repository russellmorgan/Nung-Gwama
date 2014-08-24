/**
 * Created by russellmorgan on 8/22/14.
 */

var goBackHome = function() {
    N("By this time it was so late that the woman had to give up the idea of visiting her parents.");
    N("So she sold the cakes, and with the money she paid a porter to carry her gifts back to her own house.");
    N("Penniless, hungry and frightened, the poor woman felt sure her end was near.");
    N("Nevertheless she set out the presents exactly as she had been told to do.");
    //NOTE: fade screen to dark night?
    N("By the time she had prepared everything it was very dark");
    N("She went to bed and lay there, shivering and shaking with fear.");
    fadeScene();
    Clear();
    stillWaiting();
};

var stillWaiting = function() {
    N("But nothing happened.");
    N("The old watchman went by, calling out the first and second watches of the night");
    watch("A warning to all robbers...");
    watch("A warning to all robbers...");
    N("He tapped his drum and called for the third watch to begin");

    Choose({
        "Speak with the watchman":speakWatchman,
        "Hide in fear in your home":waitGwama
    })
};

var speakWatchman = function() {
    N("The woman ventured out to her front door and saw the watchman");
    w("Have you seen a terrible monster on your watch tonight?");
    N("The watchman replied that all had been quiet on the first two watches");
    N("Sensing her concern the watchman told her")
    watch("It is true that the Nung Gwama always does what he says.");
    watch("But we will watch over you tonight.");
    N("The woman did not feel much better but thanked the watchman and returned to bed.");
    fadeScene();
    Clear();
    waitGwama();
};

var waitGwama = function() {
    N("Still nothing happened.");
    N("Everything was terribly quiet.");
    N("Then suddenly &mdash;");
    g("Flip");
    g("Flop");
    g("Flip");
    g("Flop");
    N("It was the fat and floppy feet of the Nung Gwama, and they were just outside her door!");
    confrontGwama();
};

var confrontGwama = function() {
    g("Aargh! Aargh!");
    N("The Nung Gwama roared with all his might.");
    g("Open up the door!");
    g("I have come to tear you and crunch you and eat you all up.");

    Choose({
        "Stay in bed in fear":stayStill,
        "Open the door":openDoor
    })
};

var openDoor = function() {
    N("The woman did as the Nung Gwama asked.");
    g("Aargh!");
    N("The Terrible monster reached for the woman and tore at her with all his might.");
    A("The Nung Gwama has killed you.");
    fadeScene();
    Clear();
    restartGame();
};
var scene8 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(goBackHome,0);
};

var goBackHome = function() {
    N("By this time it was so late that the woman had to give up the idea of visiting her parents.");
    N("So she sold the cakes, and with the money she paid a porter to carry her gifts back to her own house.");
    N("Penniless, hungry and frightened, the poor woman felt sure her end was near.");
    N("Nevertheless she set out the presents exactly as she had been told to do.");
    //NOTE: fade screen to dark night?
    N("By the time she had prepared everything it was very dark");
    N("She went to bed and lay there, shivering and shaking with fear.");
    Wait(3000);
    queue(fadeScene,0);
    Wait(2000);
    queue(stillWaiting,0);
};

var stillWaiting = function() {
    N("But nothing happened.");
    N("The old watchman went by, calling out the first and second watches of the night");
    watch("&#8220;A warning to all robbers...&#8221;");
    N("He tapped his drum and called for the third watch to begin");

    Choose({
        "Speak with the watchman":speakWatchman,
        "Hide in fear in your home":waitGwama
    })
};

var speakWatchman = function() {
    N("The woman ventured out to her front door and saw the watchman");
    w("&#8220;Have you seen a terrible monster on your watch tonight?&#8221;");
    N("The watchman replied that all had been quiet on the first two watches");
    N("Sensing her concern the watchman told her")
    watch("&#8220;It is true that the Nung Gwama always does what he says.&#8221;");
    watch("&#8220;But we will watch over you tonight.&#8221;");
    N("The woman did not feel much better but thanked the watchman and returned to bed.");
    Wait(3000);
    queue(waitGwama,0);
};

var waitGwama = function() {
    queue(fadeScene,0);
    Wait(2000);
    N("Still nothing happened.");
    N("Everything was terribly quiet.");
    N("Then suddenly &mdash;");
    g("Flip");
    g("Flop");
    g("Flip");
    g("Flop");
    N("It was the fat and floppy feet of the Nung Gwama, and they were just outside her door!");
    Wait(3000);
    queue(confrontGwama,0);
};

var confrontGwama = function() {
    g("&#8220;Aargh! Aargh!&#8221;");
    N("The Nung Gwama roared with all his might.");
    g("&#8220;Open up the door!&#8221;");
    g("&#8220;I have come to tear you and crunch you and eat you all up.&#8221;");

    Choose({
        "Stay in bed in fear":scene9,
        "Open the door":openDoor
    })
};

var openDoor = function() {
    N("The woman did as the Nung Gwama asked.");
    g("&#8220;Aargh!&#8221;");
    N("The Terrible monster reached for the woman and tore at her with all his might.");
    A("The Nung Gwama has killed you.");
    Wait(3000);
    queue(fadeScene,0);
    Wait(2000);
    queue(gameFail,0);
};
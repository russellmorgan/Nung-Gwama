//Scene 1, in which the woman meets the terrible Nung Gwama

function meetGwama(){

    N("The dusty road was empty.");
    N("As she walked she could see the dark grove of bamboo trees coming closer.");
    N("Suddenly, as the woman passed the grove by the side of the road, out jumped a terrible monster and it roared.");
    g('<strong>Aargh! Aargh!</strong>');
    N("She knew at once that it was the Nung Gwama");
    N("It had the body of a bull and a head as big as an oven and it gnashed its teeth and stretched out its claws in a horrible way.");
    N("It was no wonder, then, that the poor woman sank to her knees in terror and looked up at the Terrible Nung Gwama");

    Choose({
        "Look at Nung Gwama": lookGwama,
        "Hide your face from the terrible monster": hideGwama,
        "Run Away": runGwama
    });

}

//actions

var lookGwama = function() {
    N("He looked very fierce, and she remembered that for all things the Nung Gwama delights most is in eating people");
    N("But what strikes people about the monster is his <em>way</em> of eating.");
    N("He does not pick delicately at his food, disposing of each choice morsel in a polite manner.");
    N("He just crunches and chews in the rudest way imaginable and gobbles up everything - hair, head, bones and all - roaring all while");
    g('<strong>"Aargh! Aargh!"</strong>');
    N("Less frightening but still horrid, are his feet.");
    N("They are very fat, and floppy, so that as he walks you can hear them.");
    g("Flip");
    g("Flop");
    g("Flip");
    gwamaRequest();
};

var hideGwama = function() {
    N("Now, no one likes the idea of being eaten, whether by a tiger, snake, or a dragon.");
    N("So the woman hide her face from this terrible monster");
    gwamaRequest();
};

var runGwama = function() {
    N("With all her strength the woman turned away from the monster and ran as fast as she could");
    N("Nung Gwama roared again and chased after her");
    g("Aargh! I will eat you whole!");
    N("And with that the monster caught up with the woman, for he was very big and very strong.");
    N("He grabbed her and threw her into his mouth and began to eat her.");
    g("Aargh!");
    N("He crunched and chewed and made horrible noises the whole while.");
    gameFail();
};

var gwamaRequest = function() {
    N("The Nung Gwama said greedily");
    g("Give me those delectable cakes at once.");
    N("Now, even though the she was very frightened, the poor woman's duty to her parents came first.");
    w("I can't do that, they are for my venerable parents.");
    N("She sobbed heavily");
    g("All right then. This very night I will come to your house and tear you to pieces with my claws and crunch you up with my sharp teeth and <em>eat</em> you");
    N("At this, the woman hung her head in despair.");
    fadeScene();
    Clear();
    meetVillagers();
};


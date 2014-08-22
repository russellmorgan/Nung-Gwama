//Scene 2 in which the woman cries and talks to the villagers about her situation

var meetVillagers = function() {
    N("Then, after awhile, she fearfully lifted her head and looked around her.");
    N("The Nung Gwama had vanished.");
    N("But there was no doubt that he would come back. Sure that she was about to have a painful and also undignified death, the poor woman sat in the dust, howling with fear.");
    N("Some people passing by stopped politely to ask what was the matter.");

    Choose({
        "Speak to first villager": speakVillager1,
        "Speak to second villager": speakVillager2,
        "Stay quiet": noSpeakVillager
    });
};

var speakVillager1= function() {
    //villager 1 dialog
    w("The terrible Nung Gwama is coming tonight to tear me to pieces and crunch me up and eat me.");
    N("The villager looked at his wife and nodded his head");
    N("It was true, he said, she might as well prepare to die: The Nung Gwama always came when he said he would.");

    Choose({
        "Speak to second villager": speakVillager2,
        "Stay quiet": noSpeakVillager
    });

};

var speakVillager2 = function() {
     N("Villager 2 dialog");
     pedlarArrives();
};

var noSpeakVillager = function() {
    N("She was so frightened and resigned to her fate that should could not say a word.");
    N("So the villagers continued on their way, unaware of what was in store for the poor woman.");
    N("Had they known perhaps the could have helped.");
    N("The woman eventually walked home and waited for nightfall and the terrible Nung Gwama ");
    gwammaEatsYou();
};

var pedlarArrives = function() {
    N("While the woman was talking, a pedlar stopped to ask why the poor woman was weeping.");
    N("The villagers told him about the Nung Gwama's threat.");
    N("The pedlar set down the bamboo baskets which hung from his carrying pole.");
    N("The thought for a moment.");
    p("Here, I'll give you these sharp needles.");
    p("Stick them in the door of your house, near the latch.");
    p("Maybe the Nung Gwama will prick himself when he tries to open the door.");

    Choose({
        "Take the needles":takeNeedles,
        "Refuse the needles":refuseNeedles
    });
};

var takeNeedles = function() {
    N("The woman accepted the gift.");
    N("And the pedlar picked up his baskets and the pole and went off again.");
    N("The woman, still frightened, continued to cry.");
    N("For how could a few needles save her from the Nung Gwama?");

    fadeScene();
    Clear();
    meetManurePedlar();
}

var refuseNeedles = function() {
    N("The woman could not think of how the needles would ever stop something as terrible as the Nung Gwama and refused the gift.");
    N("And the pedlar picked up his baskets and the pole and went off again.");
    gameFail();
};
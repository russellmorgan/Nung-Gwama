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
    //villager 1dialog
    N("Villager 1 dialog");
};

var speakVillager2 = function() {
    //villager 2 dialog
        N("Villager 2 dialog");
};

var noSpeakVillager = function() {
    N("She was so frightened and resigned to her fate that should could not say a word.");
    N("So the villagers continued on their way, unaware of what was in store for the poor woman.");
    N("Had they known perhaps the could have helped.");
    N("The woman eventually walked home and waited for nightfall and the terrible Nung Gwama ");
    gwammaEatsYou();
};
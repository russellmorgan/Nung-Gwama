var scene5 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(meetFishPedlar,0);
};

var meetFishPedlar = function() {
    N("Then a fish seller came along.");
    p("&#8220;What is all this weeping and wailing?&#8221;");
    N("The woman, still howling with fright, told him the whole story.");
    N("He too, wanted to help. So he offered the woman two fish in a cooking pot.");
    p("&#8220;Take these two fish.&#8221;");
    p("&#8220;But don't cook them, or they won't be able to bite.&#8221;");
    p("&#8220;Just keep them in the pot.&#8221;");
    p("&#8220;If the Nung Gwama is bitten by the snakes, maybe he will think that the cooking pot is full of warm water and he will try to bathe his sore hands.&#8221;");
    p("&#8220;If he puts his hands in the pot, the fish will bite him so hard he might give up on the whole idea of eating you and run away.&#8221;");

    Choose({
       "Accept the two fish":takeFish,
        "Refuse the fish":refuseFish
    });
};

var refuseFish = function() {
    N("The woman could not see how two small fish would save her from the Nung Gwama.");
    w("Thank you for your kindness but please keep your fish.");
    N("The fish monger wished her luck and continued on his way.");
    Wait(3000);
    queue(scene6,0);
};

var takeFish = function() {
    requiredItems.fish = 1;
    N("The woman thought that was very unlikely, but she took the fish and the cooking pot and thanked him.");
    N("She went on sobbing loudly.");
    Wait(3000);
    queue(scene6,0);
};
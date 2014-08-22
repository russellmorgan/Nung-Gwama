/**
 * Created by russellmorgan on 8/22/14.
 */

var meetFishPedlar = function() {
    N("Then a fish seller came along.");
    p("What is all this weeping and wailing?");
    N("The woman, still howling with fright, told him the whole story.");
    N("He too, wanted to help. So he offered the woman two fish in a cooking pot.");
    p("Take these two fish.");
    p("But don't cook them, or they won't be able to bite.");
    p("Just keep them in the pot.");
    p("If the Nung Gwama is bitten by the snakes, maybe he will think that the cooking pot is full of warm water and he will try to bathe his sore hands.");
    p("If he puts his hands in the pot, the fish will bite him so hard he might give up on the whole idea of eating you and run away.");

    Choose({
       "Accept the two fish":takeFish,
        "Refuse the fish":refuseFish
    });
};

var refuseFish = function() {
    N("The woman could not see how two small fish would save her from the Nung Gwama.");
    w("Thank you for your kindness but please keep your fish");
    N("The fish monger wished her luck and continued on his way.");

};

var takeFish = function() {
    N("The woman thought that was very unlikely, but she took the fish and the cooking pot and thanked him.");
    N("She went on sobbing loudly.");
    fadeScene();
    Clear();
    meetEggSeller();
};
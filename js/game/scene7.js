/**
 * Created by russellmorgan on 8/22/14.
 */

var meetStonePedlar = function() {
  N("Next, a seller of millstones heard her crying");
  p("&#8220;I will give you this millstone, It is very, very heavy.&#8221;");
  p("&#8220;You must hang it from the ceiling above your bed.&#8221;");
  p("&#8220;If you can get the Nung Gwama to stand below it, cut the strings and maybe the millstone will fall on the monster's head and knock him out.&#8221;");
  p("&#8220;But then it will still be necessary to finish him off, so here is an iron bar.&#8221;");
  p("&#8220;You can beat out any life that is left in him.&#8221;");

    Choose({
        "Accept the heavy millstone":takeStone,
        "Refuse the stone":refuseStone
    })
};

var refuseStone = function() {
    N("The woman could not see how she would get the heavy stone home.");
    w("Thank you but I could not possibly carry something so heavy.");
    N("The millstone pedlar wished her luck and continued on his way.");
    fadeScene();
    Clear();
    goBackHome();
};

var takeStone = function() {
    requiredItems.stone = 1;
    N("The woman took the millstone with gratitude and the seller went on his way.");
    fadeScene();
    Clear();
    goBackHome();
};
//Manure pedlar

var scene3 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(meetManurePedlar,0);
};

var meetManurePedlar = function() {
    N("Her wails attracted a man who collected manure, which he used to fertilize his fields.");
    N("He asked her what was the matter.");
    N("When she told him, he thought for awhile and then said.");
    p("&#8220;Look, here is a little manure. Spread it on your door.&#8221;");
    p("&#8220;Perhaps the Nung Gwama will dirty his hands with it, and go away.&#8221;");

    Choose({
        "Take the manure": takeManure,
        "Refuse the manure": refuseManure,
    });
};

var takeManure = function() {
    //record inventory
    requiredItems.manure = 1;
    N("The woman accepted his gift, but she cried as loudly as ever, for she thought it would be of little help against the terrible Nung Gwama.");
    Wait(2000);
    queue(scene4,0);
};

var refuseManure = function() {
   N("The smell of the manure was too much for the woman and she refused his gift.");
   N("And so the man shrugged and continued on his way.");
    Wait(2000);
    queue(scene4,0);
};
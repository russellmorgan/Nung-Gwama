//Manure pedlar

var meetManurePedlar = function() {
    N("Her wails attracted a man who collected manure, which he used to fertilize his fields.");
    N("He asked her what was the matter.");
    N("When she told him, he thought for awhile and then said");
    p("Look, here is a little manure. Spread it on your door.");
    p("Perhaps the Nung Gwama will dirty his hands with it, and go away.");

    Choose({
        "Take the manure": takeManure,
        "Refuse the manure": refuseManure,
    });
};

var takeManure = function() {
    N("The woman accepted his gift, but she cried as loudly as ever, for she thought it would be of little help against the terrible Nung Gwama.");
    fadeScene();
    Clear();
    meetSnakePedlar();
};

var refuseManure = function() {
   requiredItems.manure = 1;
   N("The smell of the manure was too much for the woman and she refused his gift.");
   N("And so the man shrugged and continued on his way");
    fadeScene();
    Clear();
    meetSnakePedlar();
};
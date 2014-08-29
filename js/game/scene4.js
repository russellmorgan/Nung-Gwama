//Snake pedlar

var scene4 = function() {
    queue(fadeScene,0);
    Wait(2000);
    queue(meetSnakePedlar,0);
}

var meetSnakePedlar = function() {
    N("Soon a man came by, calling out...");
    p("&#8220;Snakes for sale!&#8221;");
    p("&#8220;Snakes for sale!&#8221;");
    N("He, too, stopped when he saw the weeping woman. When he asked, she told him all about the Nung Gwama, the other pedlars and the man who offered the manure.");
    N("The snake seller wanted to help her, too.");
    p("&#8220;Here are two of my most poisonous snakes.&#8221;")
    p("&#8220;Put them into your washing pot. Maybe the Nung Gwama will want to wash the manure off his hands.&#8221;");
    p("&#8220;If he tries, these snakes will bite him.&#8221;");

    Choose({
       "Take the snakes":takeSnakes,
       "Refuse the snakes":refuseSnakes
    });
};

var refuseSnakes = function() {
    N("The woman was quite afraid of the snakes and refused.");
    N("She thanked him for his kindness and the pedlar went on his way.");
    Wait(2000);
    queue(scene5,0);
};

var takeSnakes = function() {
   requiredItems.snakes = 1;
   N("The woman thanked him for his kindness, but soon she was weeping again &mdash; for what could mere snakes do against the terrible Nung Gwama?");
    Wait(2000);
    queue(scene5,0);
};
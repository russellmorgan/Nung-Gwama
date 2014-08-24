//Snake pedlar

var meetSnakePedlar = function() {
    N("Soon a man came by, calling out...");
    p("Snakes for sale!");
    p("Snakes for sale!");
    N("He, too, stopped when he saw the weeping woman. When he asked, she told him all about the Nung Gwama, the other pedlars and the man who offered the manure.");
    N("The snake seller wanted to help her, too.");
    p("Here are two of my most poisonous snakes.")
    p("Put them into your washing pot. Maybe the Nung Gwama will want to wash the manure off his hands.");
    p("If he tries, these snakes will bite him");

    Choose({
       "Take the snakes":takeSnakes,
       "Refuse the snakes":refuseSnakes
    });
};

var refuseSnakes = function() {
    N("The woman was quite afraid of the snakes and refused.");
    N("She thanked him for his kindness and the pedlar went on his way.");
    fadeScene();
    Clear();
    meetFishPedlar();
};

var takeSnakes = function() {
   requiredItems.snakes = 1;
   N("The woman thanked him for his kindness, but soon she was weeping again &mdash; for what could mere snakes do against the terrible Nung Gwama?");
    fadeScene();
    Clear();
    meetFishPedlar();
};
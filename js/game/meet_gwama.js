/**
 * Created by russellmorgan on 8/13/14.
 */

//Meet the Nung Gwama

function meetGwama(){

    N("The dusty road was empty.");
    N("As she walked she could see the dark grove of bamboo trees coming closer.");
    N("Suddenly, as the woman passed the grove by the side of the road, out jumped a terrible monster.");
    g('<strong>"Aargh! Aargh!"</strong> it roared.');
    N("She knew at once that it was a Nung Gwama")

    Choose({
        "It was totally all a dream.": Inception_Dream,
        "He's got to be back in the real world!": Inception_Awake,
        "Doesn't matter. Cobbs just finally let go.": Inception_Neither
    });

}


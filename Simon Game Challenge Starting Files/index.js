var box = ["green", "red", "yellow", "blue"];
var response = [];
var ans = [];
var level = 0;
var started = false;

$("body").keydown(function() {
    if (!started) {
        $("h1").text("Level-" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var choseColor = $(this).attr('id'); // grabs the id of color clicked
    response.push(choseColor);
    music(choseColor);

    $("#" + choseColor).addClass("pressed");
    setTimeout(function() {
        $("#" + choseColor).removeClass("pressed");
    }, 100);

    check(response.length - 1);
});

function nextSequence() {
    response = [];
    level++;
    $("h1").text("Level " + level);
    var n = Math.floor(Math.random() * 4);
    ans.push(box[n]);

    $("#" + box[n]).fadeIn(100).fadeOut(100).fadeIn(100);

    music(box[n]);
}

function check(currentLevel) {
    if (response[currentLevel] === ans[currentLevel]) {
        if (response.length === ans.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        music("wrong");
        started = false;
        level = 0;
        ans = [];
    }
}

function music(key) {
    var sound = new Audio("sounds/" + key + ".mp3");
    sound.play();
}
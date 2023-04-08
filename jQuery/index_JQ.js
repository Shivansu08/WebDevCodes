$("button").click(function() {
    $("h1").css("color", "blue");
});

$("input").keydown(function(event) {
    $("h1").text(event.key);
});
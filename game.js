var respX = [];
var respO = [];
var dbl = [];
var dblsort = [];
var index = 1;
var m = 0,
    p = 0,
    r = 0,
    k = 0;
var A = [];
var B = [];
var a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var store = false;
var clickCount = 0;
var flag = 0;


$(".box").click(function() {
    clickCount++;
    if (flag == 1) {
        $("p").text("Click on Reset");
    } else {
        var boxID = $(this).attr('id');
        var doubleclickresult = doubleclick(boxID);
        if (doubleclickresult == true) {
            $("p").text("Click on other box");
        } else {
            if (index % 2 != 0) // odd index --- X
            {
                respX.push(boxID);
                $("#" + boxID).text("X");
            }
            if (index % 2 == 0) // even index ----- O
            {
                respO.push(boxID);
                $("#" + boxID).text("O");
            }
            check(respX, respO);
        }
    }
    music("click");
});

$(".btn").click(function() {
    $("h1").text("Welcome to my Tic Tac Toe Game");
    index = 1;
    flag = 0;
    respX = [];
    respO = [];
    dbl = [];
    dblsort = [];
    $(".box").text("");
    $("p").show();
    $("p").text("Turn for X");
    music("gameover");
});

function check(X, O) {
    if (index % 2 != 0) { //  for X
        X = X.sort();
        var lx = X.length;
        if (lx == 3) {
            A = [X[0], X[1], X[2]];
            for (var i = 0; i < 8; i++) {
                // alert(a[i]);
                var result = compare(A, a[i]);
                if (result === true) {
                    // alert("Hi");
                    win(index);
                    break;
                }
            }
        }
        if (lx == 4) {
            A = [
                [X[0], X[1], X[2]],
                [X[0], X[1], X[3]],
                [X[0], X[2], X[3]],
                [X[1], X[2], X[3]]
            ];
            while (m < 4) {
                for (var i = 0; i < 8; i++) {
                    // alert(a[i]);
                    var result = compare(A[m], a[i]);
                    if (result === true) {
                        // alert("Hi");
                        win(index);
                        break;
                    }
                }
                m++;
            }
            m = 0;
        }
        if (lx == 5) {
            A = [
                [X[0], X[1], X[2]],
                [X[0], X[1], X[3]],
                [X[0], X[1], X[4]],
                [X[0], X[2], X[3]],
                [X[0], X[2], X[4]],
                [X[0], X[3], X[4]],
                [X[1], X[2], X[3]],
                [X[1], X[2], X[4]],
                [X[1], X[3], X[4]],
                [X[2], X[3], X[4]]
            ];
            while (p < 10) {
                // alert(A[p]);
                for (var i = 0; i < 8; i++) {
                    // alert(a[i]);
                    var result = compare(A[p], a[i]);
                    if (result === true) {
                        // alert("Hi");
                        win(index);
                        break;
                    }
                }
                p++;
            }
            p = 0;
        }

    } else { // for O
        O = O.sort();
        var lo = O.length;
        if (lo == 3) {
            B = [O[0], O[1], O[2]];
            for (var i = 0; i < 8; i++) {
                // alert(a[i]);
                var result = compare(B, a[i]);
                if (result === true) {
                    // alert("Hi");
                    win(index);
                    break;
                }
            }
        }

        if (lo == 4) {
            B = [
                [O[0], O[1], O[2]],
                [O[0], O[1], O[3]],
                [O[0], O[2], O[3]],
                [O[1], O[2], O[3]]
            ];
            while (k < 4) {
                for (var i = 0; i < 8; i++) {
                    // alert(B[k]);
                    // alert(a[i]);
                    var result = compare(B[k], a[i]);
                    // alert(result);
                    if (result == true) {
                        // alert("Hi");
                        win(index);
                        break;
                    }
                }
                k++;
            }
            k = 0;
        }
    }
    change();
}

function change() {
    index++;
    if (index % 2 == 0) {
        $("p").text("Turn for O");
    }
    if (index % 2 != 0) {
        $("p").text("Turn for X");
    }
}

function win(index) {
    flag = 1;
    if (index % 2 != 0) {
        $("h1").text("X wins");
        // animation();
        $("p").hide();
        music("gameover");
    }
    if (index % 2 == 0) {
        $("h1").text("O wins");
        // animation();
        $("p").hide();
        music("gameover");
    }
}

function compare(arr1, arr2) {
    if (arr1.length != arr2.length) {
        // alert("length unequal");
        return false;
    } else {
        // alert("compare else loop running");
        // alert(arr1.length);
        var res = false;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                // alert(i + " element not equal");
                return false;
            } else {
                // alert(i + " element equal");
                res = true;
                // alert(res);
            }

        }
        // alert(res + "finally");
        return res;
    }
}

function doubleclick(boxID) {
    dbl.push(boxID);
    dblsort.push(boxID);
    dblsort.sort();
    // alert(dbl)
    // alert(dblsort)
    for (var t = 0; t < dblsort.length - 1; t++) {
        // alert(t)
        // alert(dblsort[t])
        r = t + 1;
        // alert(dblsort[r]);
        if (dblsort[t] == dblsort[r]) {
            // alert("Hi");
            dbl.pop();
            dblsort.pop();
            for (var b = 0; b < dbl.length; b++) {
                dblsort[b] = dbl[b];
            }
            // alert(dblsort)
            return true;
        } else {
            // alert("Bye");
            store = false;
        }
    }
    // alert(store)
    return store;
}


function music(key) {
    if (key === "click") {
        var song = new Audio("music/ting.mp3");
        song.play();
    }
    if (key === "gameover") {
        var song = new Audio("music/gameover.mp3");
        song.play();
    }
    if (key === "bg_music") {
        var song = new Audio("music/bg_music.mp3");
        song.play();
    }
}
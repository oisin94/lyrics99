function lyrics() {

    var word = "bottles";

    for (i = 99; i > 0; i--) {
        if (i > 2) {
            document.getElementById("main").innerHTML += i + " " + word + " of beer on the wall <br/>" + i + " " + word +
                " of beer <br/>" + "take one down <br/>" + "pass it around <br/>" + (i - 1) + " " + word + " of beer on the wall <br/><br/>"
        }
        else if (i == 2) {
            document.getElementById("main").innerHTML += i + " " + word + " of beer on the wall <br/>" + i + " " + word +
                " of beer <br/>" + "take one down <br/>" + "pass it around <br/>" + (i - 1) + " bottle of beer on the wall <br/><br/>"
        }
        else if (i == 1) {
            document.getElementById("main").innerHTML += i + " bottle of beer on the wall <br/>" + i +
                " bottle of beer <br/>" + "take one down <br/>" + "pass it around <br/>" + (i - 1) + " " + word + " of beer on the wall <br/><br/>"
        }

    }


}
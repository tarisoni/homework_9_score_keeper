$(document).ready(function() {

    //Set initial score to 0 on page load
    var score = 0;

    //Increase score by 5
    $(document).on("click", "#increase-5", function() {
        score += 5;

        $("#score").html(score + " Points");
    });

    //Decrease score by 5
    $(document).on("click", "#decrease-5", function() {
        if (score - 5 >= 0) {
            score -= 5;

            $("#score").html(score + " Points");
        } else {
            score = 0;

            $("#score").html(score + " Points");
        }
    });

    //Submit custom score and make sure it's a number
    $(document).on("click", "#submit-custom-score", function() {
        var customScore = parseInt($("#custom-score").val());

        if (customScore >= 0) {
            score = customScore;

            $("#score").html(score + " Points");
        }

        $("#custom-score").val("");
    });

});

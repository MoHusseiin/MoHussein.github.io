$(function () {
    var win = 0;

    $("#start").click(function (event) {
        reset();
        $('.boundary').on('mouseover', lose);
        $('#end').on('mouseover', success);
        // $('body:not(.boundary)').on('onmouseover', lose);
    });

    function reset() {
        win = 0;
        $(".boundary").css("background-color", "#eeeeee");
        $("#status").text("Click the \"S\" to begin.");
    };

    function success() {
        if (win === 0){
            win = 1;
            $(".boundary").css("background-color", "green");
            $("#status").text("You Win!");
        }
    };

    function lose() {
        if(win === 0) {
            win = -1;
            $(".boundary").css("background-color", "#ff8888");
            $("#status").text("You Lose!");
        }
    };
});
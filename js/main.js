$(document).ready(function () {
    $(".card-first").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next").removeAttr('disabled');
    });
    $("#next").click(function () {
        $("#barFirst").css({ 'border-color': 'green', 'background-color': 'yellow' });

    });
    $("#next").click(function () {
        $("#barSecond").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-1").fadeOut();
        $("#card-2").fadeIn();
    });
    $("#next").click(function () {
        $("#barThree").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-1").fadeOut();
        $("#card-2").fadeOut();
        $("#card-3").fadeIn();
    });
});



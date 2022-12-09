$(document).ready(function () {
    $(".card-first-1").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next").removeAttr('disabled');
    });

    $("#next").click(function () {
        $("#barFirst").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-1").css('display','none');
        $("#card-1").fadeOut();
        $("#card-2").fadeIn();
        $("#next").attr("disabled", true);

    });

    $(".card-first-2").click(function () {

        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#card-2").css('display','none');
        $("#card-2").fadeOut();
        $("#card-3").fadeIn();

        $("#barSecond").css({ 'border-color': 'green', 'background-color': 'yellow' });
        // $("#next").removeAttr('disabled');
    });

    $(".card-first-3").click(function () {

        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#card-3").css('display','none');
        $("#card-3").fadeOut();
        $("#card-4").fadeIn();
        $("#barThree").css({ 'border-color': 'green', 'background-color': 'yellow' });
        // $("#next").removeAttr('disabled');
    });



});




$(document).ready(function () {
    $(".card-first-1").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-1").removeAttr('disabled');
    });

    $("#next-1").click(function () {
        $("#barFirst").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-1").css('display', 'none');
        $("#card-1").fadeOut();
        $("#card-2").fadeIn();
    });

    $(".card-first-2").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-2").removeAttr('disabled');
    });

    $("#next-2").click(function () {
        $("#barSecond").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-2").css('display', 'none');
        $("#card-2").fadeOut();
        $("#card-3").fadeIn();
    });

    $(".card-first-3").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-3").removeAttr('disabled');
    });

    $("#next-3").click(function () {
        $("#barThree").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-3").css('display', 'none');
        $("#card-3").fadeOut();
        $("#card-4").fadeIn().css();
    });

    $(".card-first-4").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-3").removeAttr('disabled');
    });
});




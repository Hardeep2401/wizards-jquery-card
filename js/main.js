$(document).ready(function () {
    $(".card-first-1").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-1").removeAttr('disabled');
    });
    $("#next-1").click(function () {
        $("#barFirst").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $(".progress-line").css({
            'border': '2px solid green',
            'position': 'absolute',
            'margin-top': '18px',
            'width': '336px',
            'margin-left': '55px',
        })
        $("#card-1").css('display', 'none');
        $("#card-1").fadeOut();
        $("#card-2").fadeIn();
    });
    $("#back").click(function () {
        $("#barFirst").css({ 'border-color': '', 'background-color': '' });
        $(".progress-line").css({
            'border': '2px solid gray',
            'position': 'absolute',
            'margin-top': '18px',
            'width': '336px',
            'margin-left': '55px',
        })
    });
    $(".card-first-2").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-2").removeAttr('disabled');
    });
    $("#next-2").click(function () {
        $("#barSecond").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $(".progress-line-2").css({
            'border': '2px solid green',
            'position': 'absolute',
            'margin-top': '18px',
            'width': '336px',
            'margin-left': '393px',
        })
        $("#card-2").css('display', 'none');
        $("#card-2").fadeOut();
        $("#card-3").fadeIn();
    });
    $("#back-2").click(function () {
        $("#barSecond").css({ 'border-color': '', 'background-color': '' });
        $(".progress-line-2").css({
            'border': '2px solid gray',
            'position': 'absolute',
            'margin-top': '18px',
            'width': '336px',
            'margin-left': '393px',
        })
        $("#card-2").css('display', 'none');
        $("#card-2").fadeOut();
        $("#card-1").fadeIn();
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
    $("#back-3").click(function () {
        $("#bar").css({ 'border-color': 'green', 'background-color': 'yellow' });
        $("#card-3").css('display', 'none');
        $("#card-3").fadeOut();
        $("#card-2").fadeIn();
    });
    $(".card-first-4").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next-3").removeAttr('disabled');
    });
    $("#back-4").click(function () {
        $("#barThree").css({ 'border-color': '', 'background-color': '' });
        $("#card-4").css('display', 'none');
        $("#card-4").fadeOut();
        $("#card-3").fadeIn();
    });

});




$(document).ready(function () {
    $(".card-first").click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass("active");
        $("#next").removeAttr('disabled');
    });
    $("#next").click(function () {
        $("#barFirst").css({ 'border-color': 'green', 'background-color': 'yellow' });
    });
    
});



$(document).ready(function () {
    $("#next").click(function () {
        // $(this).parents(".bar-first").fadeOut('fast');
        // $(this).parents(".bar-first").next().fadeIn('fast').css({ 'background-color': 'yellow', 'border-color': 'green' });
        // $(this).steps('.bar-first').css({ 'background-color': 'yellow', 'border-color': 'green' });
        $(".bar-first").css({ 'background-color': 'yellow', 'border-color': 'green' });

    });
    // $("#back").click(function () {
    //     $(".bar-first").css({ 'border-color': '', 'background-color': '' });
    // });

});
$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();
    $(".shor").noUiSlider({
        start: 100,
        connect: "lower",
        step: 10,
        range: {
            min: 70,
            max: 100
        }
    });
});

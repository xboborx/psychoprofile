function hideSliders(parent) {
    parent.find('.slider').hide('slow');
    parent.find('.slider-value').hide('slow');
}

function showSliders(parent) {
    parent.find('.slider').show('fast');
    parent.find('.slider-value').show('fast');
}

function checkedFirstRadio() {
    var row;
    var rows = $('.jumbotron').find('.row');
    $.each(rows, function(index, value) {
        $(value).find('input:radio').first().click();
    });
}

$(document).ready(function() {
    //TODO: исправить на нормальный код
    $('.slider-value').text("100");

    $('.slider').on({
        slide: function(){
            $(this).parent().find('.slider-value').text($(this).val());
        },
        set: function(){
            $(this).parent().find('.slider-value').text($(this).val());
        },
        change: function(){
            $(this).parent().find('.slider-value').text($(this).val());
        }
    });

    $('input:radio').on('click', function() {
        hideSliders($(this).closest('.row'));
        showSliders($(this).closest('.col-lg-3'));
    });

    //Должен быть после "$('input:radio').on('click'...)"
    checkedFirstRadio();

});
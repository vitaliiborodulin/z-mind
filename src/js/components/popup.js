$('.btn-popup').on('click', function () {
    var text = $(this).attr('data-text');
    $('.popup__subtitle').text(text);
    $('#lead-popup input[type=hidden]').val(text);
});
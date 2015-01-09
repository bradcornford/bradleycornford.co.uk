$(document).ready(function()
{
    var blockNumber = 0;

    $('.button').click(function()
    {
        if (blockNumber == 0) {
            blockNumber = $(this).attr('block');
        }

        if($('.page_block[block="' + blockNumber + '"]').is(':hidden')){
            $('html, body').animate({
                scrollTop: 506
            }, 2000);

            $('.page_block[block="' + blockNumber + '"]').show().animate({
                opacity: 1
            }, 1000);
        } else {
            $('.page_block[block="' + blockNumber + '"]').animate({
                opacity: 0,
                height: 0
            }, 1000, function()
            {
                $(this).hide().css('height', 'auto');
                blockNumber = 0;
            });
        }

        $('.page_block_small').each(function()
        {
            $(this).animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 1000);
        });
    });

    requiredFields = ["name", "email", "message"];
    errorNotice = $("#form_error");
});

$(function ($) {
    $(function () {

        
        $('#navtoggle').click(function () {
            $('#navbar ul li').slideToggle();
        });

        $('#navtoggle').on('click', function () {
            this.classList.toggle('active');
        });

    });

});

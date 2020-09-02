window.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();

            if (wScroll > 20) {
                $('.header').addClass('active');
                $('.slide-menu').addClass('scrolled');
            }
            else {
                $('.header').removeClass('active');
                $('.slide-menu').removeClass('scrolled');
            }
        });
    })
})
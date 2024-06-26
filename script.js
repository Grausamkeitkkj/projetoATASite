// remover # no url
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a[href="#"]');

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
        });
    });
});

(function($) {
    $(function() {
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    });
}
)(jQuery);
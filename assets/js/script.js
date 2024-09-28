$(document).ready(function () {
    if ($('.carousel').length > 0) {
        $('.carousel').slick({
            centerMode: true,
            centerPadding: '400px', /* Adjust this to control how much of the side items are visible */
            slidesToShow: 1,
            focusOnSelect: true,
            autoplay: false, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            prevArrow: `<button type="button" class="slick-arrows slick-prev">
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 1.58838L1.48529 8.99279L8.5 16.3972" stroke="#BBBBBB" stroke-width="2"/>
    </svg>
    </button>`,
            nextArrow: `<button type="button" class="slick-arrows slick-next">
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1.58838L8.51471 8.99279L1.5 16.3972" stroke="white" stroke-width="2"/>
    </svg>
    </button>`,
            dots: false, // Hide navigation dots
            draggable: true, // Enable dragging
            infinite: true, // Infinite looping
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        centerPadding: '20px'
                    }
                }
            ]
        });
    }
    if ($('.prices-carousel').length > 0) {
        $('.prices-carousel').slick({
            centerMode: false,
            slidesToShow: 1,
            focusOnSelect: false,
            autoplay: false, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            dots: true, // Hide navigation dots
            draggable: true, // Enable dragging
            infinite: false, // Infinite looping
            arrows: false, // Hide arrows
        });
        // Add click event to .rw-flex divs
        $('.rw-flex').on('click', function () {
            var slideIndex = $(this).data('slide');
            $('.prices-carousel').slick('slickGoTo', slideIndex);
        });

        // Optionally, highlight the active dot
        $('.prices-carousel').on('afterChange', function (event, slick, currentSlide) {
            $('.rw-flex').removeClass('active');
            $('.rw-flex[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }
})
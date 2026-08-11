(function ($) {
    "use strict";

    $(window).on('load', function () {

        // Spinner
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }


        // Initiate the wowjs
        new WOW({ offset: 0 }).init();


        // Sticky Navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        });


        // Dropdown on mouse hover
        const $dropdown = $(".dropdown");
        const $dropdownToggle = $(".dropdown-toggle");
        const $dropdownMenu = $(".dropdown-menu");
        const showClass = "show";

        $(window).on("resize", function () {
            if (this.matchMedia("(min-width: 992px)").matches) {
                $dropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                );
            } else {
                $dropdown.off("mouseenter mouseleave");
            }
        }).trigger("resize");






        // Header carousel
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 3000,
            items: 1,
            dots: true,
            loop: true,
            nav: false,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });


        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 500,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });

        // Team carousel
        $(".team-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 500,
            margin: 25,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 },
                1200: { items: 5 }
            }
        });

        // Car carousel
        $(".car-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 24,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });


        // Popular Packages Carousel — 1 full card + partial peek of next card
        var popPkgCarousel = $(".popular-packages-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 600,
            margin: 16,
            dots: false,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1, stagePadding: 60 },
                576: { items: 1, stagePadding: 80 },
                768: { items: 1, stagePadding: 120 },
                992: { items: 2, stagePadding: 60 }
            }
        });
        $('#pop-pkg-prev').click(function () {
            popPkgCarousel.trigger('prev.owl.carousel');
        });
        $('#pop-pkg-next').click(function () {
            popPkgCarousel.trigger('next.owl.carousel');
        });

        // Popular Varanasi Packages Carousel — 1 full card + partial peek of next card
        var vnsPkgCarousel = $(".varanasi-packages-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 600,
            margin: 16,
            dots: false,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1, stagePadding: 60 },
                576: { items: 1, stagePadding: 80 },
                768: { items: 1, stagePadding: 120 },
                992: { items: 2, stagePadding: 60 }
            }
        });
        $('#vns-pkg-prev').click(function () {
            vnsPkgCarousel.trigger('prev.owl.carousel');
        });
        $('#vns-pkg-next').click(function () {
            vnsPkgCarousel.trigger('next.owl.carousel');
        });

    });

})(jQuery);

(function($) {
"use strict";
    // Portfolio subpage filters
    function portfolio_init() {
        var portfolio_grid = $('.portfolio-grid'),
            portfolio_filter = $('.portfolio-filters');
            
        if (portfolio_grid) {

            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });

            portfolio_filter.on("click", ".filter", function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('.portfolio-filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
            });

        }
    }
    // /Portfolio subpage filters

    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width(),
            siteHeader = $('#site_header');

        siteHeader.addClass('mobile-menu-hide');
        $('.menu-toggle').removeClass('open');
        setTimeout(function(){
            siteHeader.addClass('animate');
        }, 100);

        /*if (windowWidth < 1025) {
            siteHeader.addClass('mobile-menu-hide');
            $('.menu-toggle').removeClass('open');
            setTimeout(function(){
                siteHeader.addClass('animate');
            }, 500);
        } else {
            siteHeader.removeClass('animate');
        }*/
    }
    // /Hide Mobile menu

    // Custom scroll
    function customScroll() {
        var windowWidth = $(window).width();
        if (windowWidth > 1024) {
            $('.animated-section, .single-page-content').each(function() {
                $(this).perfectScrollbar();
            });
        } else {
            $('.animated-section, .single-page-content').each(function() {
                $(this).perfectScrollbar('destroy');
            });
        }
    }
    // /Custom scroll

    //On Window load & Resize
    $(window)
        .on('load', function() { //Load
            // Animation on Page Loading
            $(".preloader").fadeOut( 800, "linear" );

            // initializing page transition.
            var ptPage = $('.animated-sections');
            if (ptPage[0]) {
                PageTransitions.init({
                    menu: 'ul.main-menu',
                });
            }
        })
        .on('resize', function() { //Resize
             mobileMenuHide();
             $('.animated-section').each(function() {
                $(this).perfectScrollbar('update');
            });
            customScroll();
        });


    // On Document Load
    $(document).ready(function () {
        var movementStrength = 23;
        var height = movementStrength / $(document).height();
        var width = movementStrength / $(document).width();
        $("body").on('mousemove', function(e){
            var pageX = e.pageX - ($(document).width() / 2),
                pageY = e.pageY - ($(document).height() / 2),
                newvalueX = width * pageX * -1,
                newvalueY = height * pageY * -1,
                elements = $('.lm-animated-bg');

            elements.addClass('transition');
            elements.css({
                "background-position": "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )",
            });

            setTimeout(function() {
                elements.removeClass('transition');
            }, 200);
        })

        // Mobile menu
        $('.menu-toggle').on("click", function () {
            $('#site_header').addClass('animate');
            $('#site_header').toggleClass('mobile-menu-hide');
            $('.menu-toggle').toggleClass('open');
        });

        // Mobile menu hide on main menu item click
        $('.main-menu').on("click", "a", function (e) {
            mobileMenuHide();
        });

        // Sidebar toggle
        $('.sidebar-toggle').on("click", function () {
            $('#blog-sidebar').toggleClass('open');
        });

        // Initialize Portfolio grid
        var $portfolio_container = $(".portfolio-grid");
        $portfolio_container.imagesLoaded(function () {
            portfolio_init(this);
        });

        // Blog grid init
        var $container = $(".blog-masonry");
        $container.imagesLoaded(function(){
            $container.masonry();
        });

        customScroll();

        // Text rotation
        $('.text-rotation-title').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            items: 1,
            margin: 330,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 3800,
            animateOut: 'animated-section-scaleDown',
            animateIn: 'animated-section-scaleUp',
            responsiveClass:true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        });

        $('.text-rotation-testimonials').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 8000,
            animateOut: 'animated-section-scaleDown',
            animateIn: 'animated-section-scaleUp',
            smartSpeed: 2500,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                },
                // breakpoint from 480 up
                480 : {
                    items: 1,
                },
                // breakpoint from 768 up
                768 : {
                    items: 2,
                },
                1200 : {
                    items: 2,
                }
            }
        });

        $(".text-rotation-testimonials").on('changed.owl.carousel', function(event) {
            readMoreBtns.forEach((btn, index) => {
                textElems[index].classList.remove('text-expanded');
                btn.textContent = 'More';
                $(".text-rotation-testimonials").trigger('play.owl.autoplay');
            });
        });

        $('.text-rotation-funfacts').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: false,
            margin: 0,
            autoplay: false,
            autoplayHoverPause: false,
            autoplayTimeout: 3800,
            animateOut: 'animated-section-scaleDown',
            animateIn: 'animated-section-scaleUp',
            smartSpeed: 1000,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2
                },
                // breakpoint from 480 up
                480 : {
                    items: 2,
                },
                // breakpoint from 768 up
                768 : {
                    items: 2,
                },
                1200 : {
                    items: 3
                }
            }
        });

        $('.text-rotation-featuredon').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            navText: false,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 3500,
            animateOut: 'animated-section-scaleDown',
            animateIn: 'animated-section-scaleUp',
            smartSpeed: 3000,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2,
                },
                // breakpoint from 480 up
                480 : {
                    items: 2,
                },
                // breakpoint from 768 up
                768 : {
                    items: 3,
                },
                1200 : {
                    items: 4,
                },
                1500 : {
                    items: 5,
                }
            }
        });

        // Testimonials Slider
        $(".testimonials.owl-carousel").owlCarousel({
            nav: true, // Show next/prev buttons.
            items: 3, // The number of items you want to see on the screen.
            loop: false, // Infinity loop. Duplicate last and first items to get loop illusion.
            navText: false,
            autoHeight: true,
            margin: 25,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                },
                // breakpoint from 480 up
                480 : {
                    items: 1,
                },
                // breakpoint from 768 up
                768 : {
                    items: 2,
                },
                1200 : {
                    items: 2,
                }
            }
        });

        // Clients Slider
        $(".clients.owl-carousel").imagesLoaded().owlCarousel({
            nav: true, // Show next/prev buttons.
            items: 2, // The number of items you want to see on the screen.
            loop: false, // Infinity loop. Duplicate last and first items to get loop illusion.
            navText: false,
            margin: 10,
            autoHeight: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2,
                },
                // breakpoint from 768 up
                768 : {
                    items: 4,
                },
                1200 : {
                    items: 5,
                }
            }
        });


        //Form Controls
        $('.form-control')
            .val('')
            .on("focusin", function(){
                $(this).parent('.form-group').addClass('form-group-focus');
            })
            .on("focusout", function(){
                if($(this).val().length === 0) {
                    $(this).parent('.form-group').removeClass('form-group-focus');
                }
            });

        // Lightbox init
        $('body').magnificPopup({
            delegate: 'a.lightbox',
            type: 'image',
            removalDelay: 300,

            // Class that is added to popup wrapper and background
            // make it unique to apply your CSS animations just to this exact popup
            mainClass: 'mfp-fade',
            image: {
                // options for image content type
                titleSrc: 'title',
                gallery: {
                    enabled: true
                },
            },

            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
                      '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                      id: null, // String that splits URL in a two parts, second part should be %id%
                      // Or null - full URL will be returned
                      // Or a function that should return %id%, for example:
                      // id: function(url) { return 'parsed id'; }

                      src: '%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                      index: '//maps.google.',
                      src: '%id%&output=embed'
                    }
                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            },

            callbacks: {
                markupParse: function(template, values, item) {
                 values.title = item.el.attr('title');
                }
            },
        });

// get all the read more buttons and text elements
        const readMoreBtns = document.querySelectorAll('.author-info-button .read-more');
        const textElems = document.querySelectorAll('.text .text-5lines');

// add click event listener to each read more button
        readMoreBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // toggle the 'expanded' class on the text element for the current testimonial
                textElems[index].classList.toggle('text-expanded');
                // update the text of the read more button based on whether the text is expanded or not
                btn.textContent = textElems[index].classList.contains('text-expanded') ? 'Less' : 'More';
                if (textElems[index].classList.contains('text-expanded')) {
                    $(".text-rotation-testimonials").trigger('stop.owl.autoplay');
                    console.log('autoplay stopped');
                }
                else {
                    $(".text-rotation-testimonials").trigger('play.owl.autoplay');
                    console.log('autoplay resumed');
                }
            });
        });

        // Fallback for Safari
        if (!CSS.supports('-webkit-line-clamp', '5')) {
            textElems.forEach((elem) => {
                elem.style.display = 'block';
                elem.style.height = 'calc(1.2em * 5)'; // 1.2em is the assumed line-height
                elem.style.overflow = 'hidden';
            });
        }

        const header = document.getElementById("site_header");
        const menuToggle = document.getElementById("menu_toggle");

        document.addEventListener("click", function(event) {
            const headerRect = header.getBoundingClientRect();
            if (headerRect.width > 100 && event.clientX < headerRect.left) {
                menuToggle.classList.remove('open');
                header.classList.add("mobile-menu-hide");
             }
        });
    });

})(jQuery);


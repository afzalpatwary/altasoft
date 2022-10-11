/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

    $(function () {
        if ($('.benefits').length || $('.web-development').length) {
            $('.benefits .software , .web-development .software').addClass('h-100');
            $('.benefits .software , .web-development .software').parent().addClass('mb-4');
        }
    });


});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // init dropdown toggle in main nav
    $(function () {
        // init dropdown toggle in main nav
        $(function () {
            if ($('.dropdown-toggle').length) {
                $(document).on('click', function (event) {
                    if ($(event.target).closest('.dropdown-menu').length)
                        return

                    if ($(event.target).closest('.dropdown-toggle').length) {
                        event.preventDefault();
                        $(event.target).closest('.dropdown-toggle').toggleClass('open');
                        $(event.target).closest('.dropdown').siblings().find('.dropdown-menu').toggleClass('dropdown-open').slideUp();
                        $(event.target).closest('.dropdown').find('.dropdown-menu').toggleClass('dropdown-open').slideToggle();
                    } else {
                        $('.dropdown-toggle').removeClass('open');
                        $('.dropdown .dropdown-menu').toggleClass('dropdown-open').slideUp();
                    }
                });
            }
        });


        // Sticky scroll
        $(function () {
            window.addEventListener("scroll", function(){
                var header = document.querySelector(".header-nav");
                header.classList.toggle("sticky", window.scrollY > 0  )
            })
        });
        


        // navbar mobile toggler action
        $(function () {
            if ($('.navbar-toggler').length) {
                $('.navbar-toggler').on('click', function () {
                    $('.navbar-collapse').slideToggle();
                });
            }
        })


        // testimonials-slider
        if ($('.testimonials-slider').length) {
            $(".testimonials-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                dots: true,
                autoplayTimeout: 2500,
                smartSpeed: 1500,
                autoplayHoverPause: true,
                navText: ["<img src='assets/img/arrows-left.svg'>", "<img src='assets/img/right-arrows.svg'>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }



        // testimonials-slider
        if ($('.trusted-slider').length) {
            $(".trusted-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: true,
                dots: true,
                autoplayTimeout: 2500,
                smartSpeed: 1500,
                autoplayHoverPause: true,
                navText: ["", ""],
                responsive: {
                    0: {
                        items: 2
                    },
                    576: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }


        // testimonials-slider
        // init mobile slider
        $(function () {
            if ($(window).width() < 991) {
                $('#technologies').addClass('technologies-slider owl-carousel owl-theme');
                if ($('.technologies-slider').length) {
                    $(".technologies-slider").owlCarousel({
                        items: 3,
                        margin: 25,
                        nav: false,
                        loop: true,
                        autoplay: true,
                        dots: true,
                        autoplayTimeout: 2500,
                        smartSpeed: 1500,
                        autoplayHoverPause: true,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 2
                            },
                            576: {
                                items: 3
                            },
                            1024: {
                                items: 4
                            },
                            1200: {
                                items: 5
                            }
                        }
                    });
                }
            }
        })



        $(function () {
            if ($(window).width() < 991) {
                $('#price-package').addClass('price-slider owl-carousel owl-theme');
                if ($('.price-slider').length) {
                    $(".price-slider").owlCarousel({
                        items: 3,
                        margin: 30,
                        nav: false,
                        loop: true,
                        autoplay: true,
                        dots: true,
						dots: true,
                        autoplayTimeout: 2500,
                        smartSpeed: 1500,
                        autoplayHoverPause: true,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 1
                            },
                            610: {
                                items: 2
                            },
                            991: {
                                items: 4
                            },
                            1200: {
                                items: 5
                            }
                        }
                    });
                }
            }
        })




        //tab mobile device
        if ($('.service-tab-owl').length) {
            $('.owl-carousel').owlCarousel({
                items: 3,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: true,
                dots: true,
                autoplayTimeout: 2500,
                smartSpeed: 1500,
                autoplayHoverPause: true,
                navText: ["", ""],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    }
                }
            })
        }





        //software license
        $(function () {
            if ($(window).width() < 776) {
                $('#our-blog-wrapper').addClass('price-slider owl-carousel owl-theme');
                if ($('.blog-slider').length) {
                    $(".blog-slider").owlCarousel({
                        items: 3,
                        margin: 30,
                        nav: false,
                        loop: true,
                        autoplay: true,
                        dots: true,
                        autoplayTimeout: 2500,
                        smartSpeed: 1500,
                        autoplayHoverPause: true,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 1
                            },
                            776: {
                                items: 1
                            },
                        }
                    });
                }
            }
        })



        //web-development

        $(function () {
            if ($(window).width() < 776) {
                $('#cs-development-wrapper').addClass('owl-carousel owl-theme');
                if ($('.web-development-slider').length) {
                    $(".web-development-slider").owlCarousel({
                        items: 3,
                        margin: 30,
                        nav: false,
                        loop: true,
                        autoplay: true,
                        dots: true,
                        autoplayTimeout: 2500,
                        smartSpeed: 1500,
                        autoplayHoverPause: true,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 1
                            },
                            776: {
                                items: 1
                            },
                        }
                    });
                }
            }
        })

        // essential-pack-contain
        $(function () {
            if ($(window).width() < 776) {
                $('#essential-pack-contain').addClass('owl-carousel owl-theme');
                if ($('.web-development-slider').length) {
                    $(".web-development-slider").owlCarousel({
                        items: 3,
                        margin: 30,
                        nav: false,
                        loop: true,
                        autoplay: true,
                        dots: true,
                        autoplayTimeout: 2500,
                        smartSpeed: 1500,
                        autoplayHoverPause: true,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 1
                            },
                            776: {
                                items: 1
                            },
                        }
                    });
                }
            }
        })




        // back to top
        if ($('#back-to-top').length) {
            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }


        // btnFormGroupCollapsedToggle
        // FormGroupCollapsed-item
        $(function () {
            if ($('.btnCollapsedToggle').length && $('.collapsed-item').length) {
                $('.btnCollapsedToggle').on('click', function (e) {
                    e.preventDefault();
                    if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
                        $(this).find('.fas').toggleClass('fa-chevron-down fa-chevron-up');
                    }
                });
            }
        });




        // tab section
        $(function () {
            if ($('.nav-item').length) {
                $('button.nav-link').on('click', function (e) {
                    e.preventDefault();
                    $('button.nav-link').removeClass('active');
                    $(this).addClass('active');
                    let tabID = $(this).data('bs-toggle');
                    $('.tab-pane').removeClass('show active');
                    $(`#${tabID}`).addClass('show active');
                })
            }
            //
        })





        // loadMore item
        $(function () {

            if (window.matchMedia("(max-width: 991px)").matches) {
                $('.benefits-parent .benefits-parent-item').slice(0, 4).show();
                $('.btn-loadMore').on('click', function (e) {
                    e.preventDefault();
                    $('.benefits-parent .benefits-parent-item:hidden').slice(0, 4).show();
                    if ($('.benefits-parent .benefits-parent-item:hidden').length < 1) {
                        $(this).addClass('disabled').css('cursor', 'no-drop')
                    } else {
                        $(this).removeClass('disabled').css('cursor', 'default')
                    }
                })
            } else {
                $('.benefits-parent .benefits-parent-item').slice(0, 8).show();
                $('.btn-loadMore').on('click', function (e) {
                    e.preventDefault();
                    $('.benefits-parent .benefits-parent-item:hidden').slice(0, 4).show();
                    console.log($('.benefits-parent .benefits-parent-item:hidden').length)
                    if ($('.benefits-parent .benefits-parent-item:hidden').length < 1) {
                        $(this).addClass('disabled').css('cursor', 'no-drop')
                    } else {
                        $(this).removeClass('disabled').css('cursor', 'default')
                    }
                });

            }
        })





        // wow js init
        $(function () {
            var wow = new WOW({
                animateClass: 'animated',
                mobile: true
            });
            wow.init();
        });






    })





});

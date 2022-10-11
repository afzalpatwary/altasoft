(function ($, sr) {
    // http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 50);
        };
    };

    // smartresize
    jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');

(function ($) {

    "use strict";

    // Initiating Isotope
    var $container = $('.filterGridRow');
    var colWidth = function () {
        var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
        if (w > 1000) {
            columnNum = 3
        } else if (w > 900) {
            columnNum = 2;
        } else if (w > 600) {
            columnNum = 2;
        } else if (w > 400) {
            columnNum = 1;
        }
        columnWidth = Math.floor(w / columnNum);
        columnWidth = columnWidth - (w > 1200 ? 30 : w < 1200 && w > 900 ? 20 : w < 900 && w > 600 ? 15 : 0);
        // Item width
        $container.find('.filterGridItem').each(function () {
            var $item = $(this);
            var multiplier_w = $item.attr('class').match(/item-w(\d)/);
            var width = multiplier_w ? columnWidth * multiplier_w[1] - 4 : columnWidth - 4;
            // Update item width
            $item.css({
                width: width
            });
        });
        return columnWidth;
    };
    var isotope = function () {
        $container.isotope({
            resizable: false,
            itemSelector: '.filterGridItem',
            masonry: {
                columnWidth: colWidth(),
                gutter: 30
            }
        });
    };

    // Activating Isotope Filter Navigation
    $('#filterNav').on('click', '.btn', function (e) {
        // remove active previous
        $('#filterNav').find('.btn').removeClass('btn-filter');
        // Add active class
        $(this).addClass('btn-filter');
        var selector = $(this).attr('data-filter');

        $('.filter-buttons .btn .total-item').text('');
        if ($(e.target).closest('.btn-filter[data-filter="*"]').length !== 1) {
            $(this).find('.total-item').text(`(${$(`.portfolio-grid ${selector}`).length})`);
        } else {
            let totalGridLength = $('.portfolio-grid .filterGridItem') ? $('.portfolio-grid .filterGridItem').length : null;
            $('.btn-filter[data-filter="*"]').find('.total-item').text(`(${totalGridLength})`);
        }

        $container.isotope({
            filter: selector
        });
    });

    // Calling Isotope
    isotope();
    $(window).smartresize(isotope);

    // Call after content loading
    $(window).load(function () {

        $(function(){
            let totalGridLength =  $('.portfolio-grid .filterGridItem') ? $('.portfolio-grid .filterGridItem').length : null;
            $('.btn-filter[data-filter="*"]').find('.total-item').text(`(${totalGridLength})`);
        })

        setTimeout(function () {
            isotope();
        }, 1000)


    });

})(jQuery);
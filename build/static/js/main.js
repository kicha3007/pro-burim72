/* ------------------- steps ------------------- */

$(document).on("scroll", function () {

    $("[data-step-item]").each(function () {
        if (window.scrollY > this.offsetTop - 700) {

            $(this).addClass("active");
        }

    })
});


/* ------------------- fancybox ------------------- */

$("[data-fancybox]").fancybox({
    padding: 0,
    helpers: {
        overlay: {
            locked: false
        }
    }
});




    /* ------------------- carousel-new ------------------- */




        $('[data-owl-carousel]').each(function () {
            var $this = $(this);
            var itemsCount = $this.data("owlItems");
            var itemsCountPad = $this.data("owlItemsPad");
            var itemsMargin = $this.data("owlItemsMargin");
            var itemsDots = $this.data("owlItemsDots");
            var itemsLoop = $this.data("owlItemsLoop");
            var itemsNav = $this.data("owlItemsNav");
            var itemsAutoplay = $this.data("owlItemsAutoplay");
            var itemsAutoplayTimeout = $this.data("owlItemsAutoplayTimeout");
            var itemsAutoplayHoverPause = $this.data("owlItemsAutoplayHoverPause");

            $this.owlCarousel({
                items: (itemsCount ? itemsCount : 1),
                margin: (itemsMargin ? itemsMargin : 20),
                nav: (itemsNav ? itemsNav : true),
                loop: (itemsLoop ? itemsLoop : true),
                autoplay: (itemsAutoplay ? itemsAutoplay : true),
                autoplayTimeout: (itemsAutoplayTimeout ? itemsAutoplayTimeout : 3000),
                autoplayHoverPause: (itemsAutoplayHoverPause ? itemsAutoplayHoverPause : true),
                dots: (itemsDots ? itemsDots : false),
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: itemsCountPad ? itemsCountPad : (itemsCount ? itemsCount : 1)
                    },
                    1000: {
                        items: itemsCount ? itemsCount : 1
                    }
                }
            });
        });



/* ****************************** dropdown-menu ****************************** */

    var $trigger = $('[data-trigger="1"]');
    var $nav = $('[data-it-nav]');
    var $this = $(this);


    $trigger.on("click", function () {
        $trigger.toggleClass('active');
        $nav.slideToggle(600, function () {
            if ($this.css("display") === "none") {
                $this.removeAttr("style");
            }
        });

    });




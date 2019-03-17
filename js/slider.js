$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        navText: ["<img src='images/main-page/nav-l.png'>","<img src='images/main-page/nav-r.png'>"],
        autoplay:true,
        autoplayTimeout:1700,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },


            630:{
                items:3,

            },
            760:{
                items:3,

            },

            860:{
                items:4,

            },
            1230:{
                items:5,

            },

            1360:{
                items:7,

            }

        }
    })


});


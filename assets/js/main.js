jQuery(document).ready(function($) {

	'use strict';

      var owl = $('.owl-carousel');
        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });



        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: 'fade scale stagger(50ms)',
            easing: 'snap',
            transitionSpeed: 400,
            selectors: {
              filter: '.filter',
              sort: '.filter'
            }
        });



});

$(document).ready(function () {
  // var imageFile = ["bg1.png", "bg2.png", "bg3.png", "bg4.png", "bg5.png", "bg6.png"];
  // var currentIndex = 0;
  // setInterval(function () {
  //     if (currentIndex == imageFile.length) {
  //         currentIndex = 0;
  //     }
  //     $(".slideshow-main").css('background-image', 'url("assets/img/' + imageFile[currentIndex++] + '")');
  //     $(".slideshow-main").css('height', '1700px');
  //     $(".slideshow-main").css('width', '1000px');
  // }, 3000);
  $(".slideshow-main > div:gt(0)").hide();

  setInterval(function() { 
    $('.slideshow-main > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slideshow-main');
  },  3000);

  $(".slideshow-main-mobile > div:gt(0)").hide();

  setInterval(function() { 
    $('.slideshow-main-mobile > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slideshow-main-mobile');
  },  3000);
});


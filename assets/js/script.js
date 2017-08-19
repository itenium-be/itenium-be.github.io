jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------


    // -------------------------------------------------------------

    //Initiat WOW JS
    new WOW().init();
    //scroll arrow bottom

    $('.scroll-bottom').click(function(){
       $('html, body').animate({scrollTop:678},'50');
   });

       //Search Box (Header)
   jQuery('.search').click(function () {
    if(jQuery('.search-btn').hasClass('fa-search')){
      jQuery('.search-open').fadeIn(500);
      jQuery('.search-btn').removeClass('fa-search');
      jQuery('.search-btn').addClass('fa-times');
    } else {
      jQuery('.search-open').fadeOut(500);
      jQuery('.search-btn').addClass('fa-search');
      jQuery('.search-btn').removeClass('fa-times');
    }   
  }); 


 
    // -------------------------------------------------------------

    //---------------------------------------------------------------
    
    (function () {
    
        /* initialize shuffle plugin */
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    
    }());   
    
// -------------------------------------------------------------
//                ADD CLASS
// -------------------------------------------------------------


$(window).scroll(function(){ 
  if ($(this).scrollTop() >670){      
    $('.who-we-are').addClass("menu-fix");
  } else{
    $('.who-we-are').removeClass("menu-fix");
  }
});


    //-------------------------------------------------------
    // counter
    //-------------------------------------------------------
 (function () {
        $('.counter').counterUp({
            delay: 2,
            time: 3000
        });

    })();



});



// owl

    // -------------------------------------------------------------
    // testimonail carosel
    // -------------------------------------------------------------

    (function () {
        $('#owl-example').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            dots:false,
            responsive:{
                320:{
                    items:2
                },
                480:{
                    items:3
                },
                768:{
                    items:4
                },
                992:{
                    items:6
                }
            }
        });

      var owl = $('#owl-example');
      owl.owlCarousel();
      // Go to the next item
      $('.testimonial-items-navigation .next').click(function() {
          owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.testimonial-items-navigation .prev').click(function() {
          // With optional speed parameter
          // Parameters has to be in square bracket '[]'
          owl.trigger('prev.owl.carousel', [300]);
      })

    }());


   jQuery(document).ready(function ($) {
    
    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
        $('.back-to-top').fadeOut(duration);
      }
    });

    $('.back-to-top').click(function (event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
    })

   $( ".dropdown" ).hover(function() {
    $( this ).toggleClass( "open");
    $(".dropdown-menu").animate({top: "22px"}, function(){$(".dropdown-menu").animate({top: "15px"});});
    });


  });


//Rs-PLUGIN
jQuery(document).ready(function() {
                
                    
                                
                    jQuery('.tp-banner').show().revolution(
                    {
                        dottedOverlay:"none",
                        delay:16000,
                        startwidth:1170,
                        startheight:670,
                        hideThumbs:200,
                        
                        thumbWidth:100,
                        thumbHeight:50,
                        thumbAmount:5,
                        
                        navigationType:"none",
                        navigationArrows:"solo",
                        navigationStyle:"preview4",
                        
                        touchenabled:"on",
                        onHoverStop:"off",
                        
                        swipe_velocity: 0.7,
                        swipe_min_touches: 1,
                        swipe_max_touches: 1,
                        drag_block_vertical: false,
                                                
                                                parallax:"mouse",
                        parallaxBgFreeze:"on",
                        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
                                                
                        keyboardNavigation:"off",
                        
                        navigationHAlign:"center",
                        navigationVAlign:"bottom",
                        navigationHOffset:0,
                        navigationVOffset:20,

                        soloArrowLeftHalign:"left",
                        soloArrowLeftValign:"center",
                        soloArrowLeftHOffset:20,
                        soloArrowLeftVOffset:0,

                        soloArrowRightHalign:"right",
                        soloArrowRightValign:"center",
                        soloArrowRightHOffset:20,
                        soloArrowRightVOffset:0,
                                
                        shadow:0,
                        fullWidth:"on",
                        fullScreen:"off",

                        spinner:"spinner4",
                        
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,

                        shuffle:"off",
                        
                        autoHeight:"off",                       
                        forceFullWidth:"off",                       
                                                
                                                
                                                
                        hideThumbsOnMobile:"off",
                        hideNavDelayOnMobile:1500,                      
                        hideBulletsOnMobile:"off",
                        hideArrowsOnMobile:"off",
                        hideThumbsUnderResolution:0,
                        
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        startWithSlide:0,
                        videoJsPath:"rs-plugin/videojs/",
                        fullScreenOffsetContainer: ""   
                    });
                    
                    
                    
                                    
                });



//////// -- mmenu -- /////////

$(function() {
                var $menu = $('nav#menu'),
                    $html = $('html, body');

                $menu.mmenu({
                    dragOpen: true
                });

                $menu.find( 'li > a' ).on(
                    'click',
                    function( e )
                    {
                        var href = $(this).attr( 'href' );

                        //  if the clicked link is linked to an anchor, scroll the page to that anchor 
                        if ( href.slice( 0, 1 ) == '#' )
                        {
                            $menu.one(
                                'closed.mm',
                                function()
                                {
                                    setTimeout(
                                        function()
                                        {
                                            $html.animate({
                                                scrollTop: $( href ).offset().top
                                            }); 
                                        }, 10
                                    );  
                                }
                            );
                        }
                    }
                );
            });


//////// -- loader -- /////////

setTimeout(function(){ $('.loader').fadeOut(); }, 3000);


//////// -- Smooth scroll -- /////////

smoothScroll.init({
      speed: 2000,
      easing: 'easeInOutCubic',
      offset: 0,
      updateURL: true,
      callbackBefore: function ( toggle, anchor ) {},
      callbackAfter: function ( toggle, anchor ) {}
    });


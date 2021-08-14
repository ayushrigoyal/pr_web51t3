(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'assets/slide-images/1.jpg' },
            { src: 'assets/slide-images/2.jpeg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);

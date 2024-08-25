$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop >= 500) {
          $('.up_btn').stop().fadeTo(200, 1);
        } else {
          $('.up_btn').stop().fadeTo(200, 0);
        }

        if(scrollTop > 0) {
            $('header').css({background: '#fff'});
            $('.top_items').css({color: '#000'});
        } else if (scrollTop <= 0) {
            $('header').css({background: 'transparent'});
            $('.top_items').css({color: '#fff'});
        }

        if(scrollTop >= 450) {
            setTimeout(() => {
                $('.coffee_item').addClass('moveBig');
            }, 500);
            $('.text').addClass('moveUp3');
        }

        if(scrollTop >= 1000) {
            $('.third_section').addClass('moveLeft');
        }
    });

    $('.up_btn').on('click touchstart', function(event) {
        event.preventDefault(); event.stopPropagation();
   
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});





import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });
	
	// Input mask
	if( $('.phone').length > 0 ) {
	$(".phone").inputmask({
	  mask: "8 999 999 99 99",
	  placeholder: " ",
	  showMaskOnHover: true,
	  onincomplete: function(){ 
		$(this).closest("form").addClass('error-phone'); 
		$(this).addClass('error'); 
		$(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
	  }, 
	  oncomplete: function(){ 
		  $(this).closest("form").removeClass('error-phone'); 
		  $(this).removeClass('error'); 
		  $(this).siblings(".error_phone").removeClass('error').html(''); 
	  },
	})
	}
	$('input.phone').on('keydown', function(event) {
	  if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
		  event.preventDefault();
		  $(this).blur();
		  return false;
	  }
	});

	//Slider
	if( $('.slider').length > 0 ) {
		let $slickPartners = $('.slider#slider-partners');
        $slickPartners.slick({
            slidesToShow: 6,
            arrows: false,
			dots: false,
			autoplay: true,
        });
	}

	// Slider Index
	if( $('.catalog-nav-show .slider#slider-index').length > 0 ) {
		let $slickIndex = $('.slider#slider-index');
		let $navHeight = $('.catalog-nav-show .navbar_catalog').height();
		let $advantage = $('.catalog-nav-show .content-slider__col .advantage').outerHeight();

		$slickIndex.find('.slider__item').css('min-height', $navHeight - $advantage - 80 );

		$slickIndex.slick({
            slidesToShow: 1,
            arrows: true,
			dots: true,
			prevArrow: '<span class="slider-arrow slider-arrow_prev"></span>',
			nextArrow: '<span class="slider-arrow slider-arrow_next"></span>',
        });
	}

	// Price Slider
	if( $('#slider-range').length > 0 ) {
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 75, 300 ],
		  slide: function( event, ui ) {
			// $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	}

	// Filter Open
	$(".filters-item .filters-item__title").on("click", function(){
		let filter = $(this).parent();
		filter.toggleClass("filters-item--active");
		filter.find(".filters-item__content").slideToggle();
	});
});
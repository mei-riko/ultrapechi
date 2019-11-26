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
		
		let $slickCard = $('.slider.slider_product');
		let $slickCardNav = $('.slider.slider_product-nav');

		$slickCard.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.slider.slider_product-nav',
        });
        $slickCardNav.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider.slider_product',
			arrows: true,
			prevArrow: '<span class="slider-arrow slider-arrow_prev"></span>',
			nextArrow: '<span class="slider-arrow slider-arrow_next"></span>',
            centerMode: true,
            focusOnSelect: true
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

	// Search Mobile
	$("#searchMobile").on("click", function(e){
		e.preventDefault();
		$(".header__mobile-search").toggleClass("header__mobile-search--active");
		$(".header__mobile-search").slideToggle();
	});

	// Filter Mobile
	$("#filterMobile").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".filters").toggleClass("filters--active");
		$(".filters").slideToggle();
	});


	// Navbar 
	$(".navbar .navbar__item.navbar__item_has-child .navbar__link").on("click", function(e){
		e.preventDefault();

		let inside = $(this).parent().find(".navbar__inside");
		inside.slideToggle();
	});

	$("#navMobile").on("click", function(e){
		e.preventDefault();
		if( !$(this).hasClass("btn-mobile--active")){
			$(this).addClass("btn-mobile--active");
			$(".header__mobile-nav").addClass("header__mobile-nav--active");
			$("body").attr("style", "overflow: hidden; overscroll-behavior: none;");
		}else{
			$(this).removeClass("btn-mobile--active");
			$(".header__mobile-nav").removeClass("header__mobile-nav--active");
			$("body").attr("style", "");
		}
	});
	// Hide Navigation on Desktop
	$(window).resize(function(){
		if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){

			$(".btn-mobile#navMobile").removeClass("btn-mobile--active");
			$(".header__mobile-nav.header__mobile-nav--active").removeClass("header__mobile-nav--active");
			$("body").attr("style", "");
		
			$(".header__mobile-search.header__mobile-search--active").removeClass("header__mobile-search--active");
			$(".header__mobile-search").hide();

			$(".filters").removeClass("filters--active");
			$(".filters").show();
		}
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		let dropdownActive = $(".header__mobile-nav.header__mobile-nav--active"); // элемент меню
		  
		if (!dropdownActive.is(e.target) // клик был не по блоку
			  && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
			  && !$(".btn-mobile#navMobile").is(e.target) ) { 
				  $(".btn-mobile#navMobile").removeClass("btn-mobile--active");
				  dropdownActive.removeClass("header__mobile-nav--active");
				  $("body").attr("style", "");
		}

		let searchActive = $(".header__mobile-search.header__mobile-search--active"); // элемент поиск
		if (!searchActive.is(e.target) // клик был не по блоку
			&& searchActive.has(e.target).length === 0 // и не по его дочерним элементам
			&& !$(".btn-mobile#searchMobile").is(e.target) ) { 
				searchActive.slideUp();
				searchActive.removeClass("header__mobile-search--active");
		}
	});
});
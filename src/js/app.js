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
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}
			]
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
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						centerMode: false,
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: false,
					}
				},
				{
					breakpoint: 577,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 380,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
		
		let $catalogHit = $('.slider.catalog__row:not(.slider_add)');
		$catalogHit.slick({
            slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<span class="slider-arrow slider-arrow_prev"></span>',
			nextArrow: '<span class="slider-arrow slider-arrow_next"></span>',
			dots: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
		let $catalogAdd = $('.slider.catalog__row.slider_add');
		$catalogAdd.slick({
            slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<span class="slider-arrow slider-arrow_prev"></span>',
			nextArrow: '<span class="slider-arrow slider-arrow_next"></span>',
			dots: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 880,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	// Slider Index
	if( $('.catalog-nav-show .slider#slider-index').length > 0 ) {
		var $slickIndex = $('.slider#slider-index');
		var $navHeight = $('.catalog-nav-show .navbar_catalog').height();
		var $advantage = $('.catalog-nav-show .content-slider__col .advantage').outerHeight();

		if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
			$slickIndex.find('.slider__item').css('min-height', $navHeight - $advantage - 80 );
		}

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

		if( !$(this).hasClass("active")){
			$(this).addClass("active");
			$(this).html("Скрыть фильтры");
		}else{
			$(this).removeClass("active");
			$(this).html("Показать фильтры");
		}

		$(".filters").toggleClass("filters--active");
		$(".filters").slideToggle();
	});


	// Navbar Mobile
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

	// Navbar Desktop
	$(".navbar .navbar__link.navbar__link_catalog").on("click", function(e){
		e.preventDefault();
		let catalogNav = $(".catalog-nav-hidden .navbar.navbar_catalog");
		catalogNav.slideToggle();
	});

	// Hide on Desktop & Resize
	$(window).resize(function(){
		if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){

			$(".btn-mobile#navMobile").removeClass("btn-mobile--active");
			$(".header__mobile-nav.header__mobile-nav--active").removeClass("header__mobile-nav--active");
			$("body").attr("style", "");
		
			$(".header__mobile-search.header__mobile-search--active").removeClass("header__mobile-search--active");
			$(".header__mobile-search").hide();

			$(".filters").removeClass("filters--active");
			$(".filters").show();

			if( $('.catalog-nav-show .slider#slider-index').length > 0 ) {
				$slickIndex.find('.slider__item').css('min-height', $navHeight - $advantage - 80 );
			}
		}
		$(".catalog-nav-hidden .navbar.navbar_catalog").slideUp();
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

		let navCatalog = $(".catalog-nav-hidden .navbar.navbar_catalog");
		if (!navCatalog.is(e.target) // клик был не по блоку
			&& navCatalog.has(e.target).length === 0 // и не по его дочерним элементам
			&& !$(".navbar .navbar__link.navbar__link_catalog").is(e.target) ) { 
				navCatalog.slideUp();
				navCatalog.removeClass("header__mobile-search--active");
		}
	});
});
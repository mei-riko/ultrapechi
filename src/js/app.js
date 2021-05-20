import $ from 'jquery';
import './nav';

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
	$(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#scrollTop").addClass('show');
        } else {
            $("#scrollTop").removeClass('show');
        }
    });
    $("#scrollTop").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    })
	
	// Input mask
	if( $('.phone').length > 0 ) {
	$(".phone").inputmask({
	  mask: "+7 999 999 99 99",
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
            arrows: true,
			prevArrow: '<span class="slider-arrow slider-arrow_prev"></span>',
			nextArrow: '<span class="slider-arrow slider-arrow_next"></span>',
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
	if( $('.slider#slider-index').length > 0 ) {
		var $slickIndex = $('.inside_index .slider#slider-index');
		let $advantage = $('.inside_index .advantage').outerHeight();

		if ( $(window).width() > 992 || !window.matchMedia('screen and (max-width: 992px)').matches ){
			$slickIndex.find('.slider__item').css('min-height', $advantage );
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

	// On Resize
	$(window).on('resize', function(){
		if ( $(window).width() > 767 || !window.matchMedia('screen and (max-width: 768px)').matches ){

			$(".header__mobile-search.header__mobile-search--active").removeClass("header__mobile-search--active");
			$(".header__mobile-search").hide();

			$(".filters").removeClass("filters--active");
			$(".filters").show();
		}
		if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
			// Index Slider
			if( $('.slider#slider-index').length > 0 ) {
				let $advantage = $('.inside_index .advantage').outerHeight();				
				$slickIndex.find('.slider__item').css('min-height', $advantage );
			}
		} else{
			// Index Slider
			if( $('.slider#slider-index').length > 0 ) {
				let $advantage = $('.inside_index .advantage').outerHeight();
				$slickIndex.find('.slider__item').css('min-height', '' );
			}
		}
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		let searchActive = $(".header__mobile-search.header__mobile-search--active"); // элемент поиск
		if (!searchActive.is(e.target) // клик был не по блоку
			&& searchActive.has(e.target).length === 0 // и не по его дочерним элементам
			&& !$(".btn-mobile#searchMobile").is(e.target) ) { 
				searchActive.slideUp();
				searchActive.removeClass("header__mobile-search--active");
		}

		let navbar = $(".nav-menu");
		if (!navbar.is(e.target) // клик был не по блоку
			&& navbar.has(e.target).length === 0 // и не по его дочерним элементам
			) { 
				navbar.removeClass("nav-menu--active");
				$(".nav-overlay").removeClass("nav-overlay--active");
		}
	});
});
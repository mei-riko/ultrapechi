/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
	(0, _jquery2.default)("a.scroll").click(function () {
		(0, _jquery2.default)("html, body").animate({
			scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	// Input mask
	if ((0, _jquery2.default)('.phone').length > 0) {
		(0, _jquery2.default)(".phone").inputmask({
			mask: "8 999 999 99 99",
			placeholder: " ",
			showMaskOnHover: true,
			onincomplete: function onincomplete() {
				(0, _jquery2.default)(this).closest("form").addClass('error-phone');
				(0, _jquery2.default)(this).addClass('error');
				(0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
			},
			oncomplete: function oncomplete() {
				(0, _jquery2.default)(this).closest("form").removeClass('error-phone');
				(0, _jquery2.default)(this).removeClass('error');
				(0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
			}
		});
	}
	(0, _jquery2.default)('input.phone').on('keydown', function (event) {
		if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
			event.preventDefault();
			(0, _jquery2.default)(this).blur();
			return false;
		}
	});

	//Slider
	if ((0, _jquery2.default)('.slider').length > 0) {
		var $slickPartners = (0, _jquery2.default)('.slider#slider-partners');
		$slickPartners.slick({
			slidesToShow: 6,
			arrows: false,
			dots: false,
			autoplay: true
		});

		var $slickCard = (0, _jquery2.default)('.slider.slider_product');
		var $slickCardNav = (0, _jquery2.default)('.slider.slider_product-nav');

		$slickCard.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			asNavFor: '.slider.slider_product-nav'
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
	if ((0, _jquery2.default)('.catalog-nav-show .slider#slider-index').length > 0) {
		var $slickIndex = (0, _jquery2.default)('.slider#slider-index');
		var $navHeight = (0, _jquery2.default)('.catalog-nav-show .navbar_catalog').height();
		var $advantage = (0, _jquery2.default)('.catalog-nav-show .content-slider__col .advantage').outerHeight();

		$slickIndex.find('.slider__item').css('min-height', $navHeight - $advantage - 80);

		$slickIndex.slick({
			slidesToShow: 1,
			arrows: true,
			dots: true,
			prevArrow: '<span class="slider-arrow slider-arrow_prev"></span>',
			nextArrow: '<span class="slider-arrow slider-arrow_next"></span>'
		});
	}

	// Price Slider
	if ((0, _jquery2.default)('#slider-range').length > 0) {
		(0, _jquery2.default)("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function slide(event, ui) {
				// $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	}

	// Filter Open
	(0, _jquery2.default)(".filters-item .filters-item__title").on("click", function () {
		var filter = (0, _jquery2.default)(this).parent();
		filter.toggleClass("filters-item--active");
		filter.find(".filters-item__content").slideToggle();
	});

	// Search Mobile
	(0, _jquery2.default)("#searchMobile").on("click", function (e) {
		e.preventDefault();
		(0, _jquery2.default)(".header__mobile-search").toggleClass("header__mobile-search--active");
		(0, _jquery2.default)(".header__mobile-search").slideToggle();
	});

	// Navbar 
	(0, _jquery2.default)(".navbar .navbar__item.navbar__item_has-child .navbar__link").on("click", function (e) {
		e.preventDefault();

		var inside = (0, _jquery2.default)(this).parent().find(".navbar__inside");
		inside.slideToggle();
	});

	(0, _jquery2.default)("#navMobile").on("click", function (e) {
		e.preventDefault();
		if (!(0, _jquery2.default)(this).hasClass("btn-mobile--active")) {
			(0, _jquery2.default)(this).addClass("btn-mobile--active");
			(0, _jquery2.default)(".header__mobile-nav").addClass("header__mobile-nav--active");
			(0, _jquery2.default)("body").attr("style", "overflow: hidden; overscroll-behavior: none;");
		} else {
			(0, _jquery2.default)(this).removeClass("btn-mobile--active");
			(0, _jquery2.default)(".header__mobile-nav").removeClass("header__mobile-nav--active");
			(0, _jquery2.default)("body").attr("style", "");
		}
	});
	// Hide Navigation on Desktop
	(0, _jquery2.default)(window).resize(function () {
		if ((0, _jquery2.default)(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches) {
			(0, _jquery2.default)(".btn-mobile#navMobile").removeClass("btn-mobile--active");
			(0, _jquery2.default)(".header__mobile-nav.header__mobile-nav--active").removeClass("header__mobile-nav--active");
			(0, _jquery2.default)("body").attr("style", "");

			(0, _jquery2.default)(".header__mobile-search.header__mobile-search--active").removeClass("header__mobile-search--active");
			(0, _jquery2.default)(".header__mobile-search").hide();
		}
	});

	(0, _jquery2.default)(document).mouseup(function (e) {
		// событие клика по веб-документу
		var dropdownActive = (0, _jquery2.default)(".header__mobile-nav.header__mobile-nav--active"); // элемент меню

		if (!dropdownActive.is(e.target) // клик был не по блоку
		&& dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
		&& !(0, _jquery2.default)(".btn-mobile#navMobile").is(e.target)) {
			(0, _jquery2.default)(".btn-mobile#navMobile").removeClass("btn-mobile--active");
			dropdownActive.removeClass("header__mobile-nav--active");
			(0, _jquery2.default)("body").attr("style", "");
		}

		var searchActive = (0, _jquery2.default)(".header__mobile-search.header__mobile-search--active"); // элемент поиск
		if (!searchActive.is(e.target) // клик был не по блоку
		&& searchActive.has(e.target).length === 0 // и не по его дочерним элементам
		&& !(0, _jquery2.default)(".btn-mobile#searchMobile").is(e.target)) {
			searchActive.slideUp();
			searchActive.removeClass("header__mobile-search--active");
		}
	});
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);
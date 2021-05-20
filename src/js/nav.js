import $ from 'jquery';

// Desktop Navbar   
function navbarHover( itemNav ){
    let parentHeader = itemNav.closest('.navbar_header');
    let item = itemNav.find(".navbar__link");
    let nav = item.data("nav");

    // console.log( nav );

    if( parentHeader.find(".navbar__link.navbar__link--active").length > 0 && !item.hasClass("navbar__link--active") ){
        let navActive = $(".navbar__link.navbar__link--active");
        navActive.removeClass("navbar__link--active");
        parentHeader.find(".navbar__children" + navActive.data("nav")).removeClass("navbar__children--active");
    }

    item.addClass("navbar__link--active");
    parentHeader.find(".navbar__children" + nav).addClass("navbar__children--active");
}
function navbarUnHover(){
    let item = $('.navbar').find(".navbar__link.navbar__link--active");
    let nav = item.data("nav");

    item.removeClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).removeClass("navbar__children--active");
}
function navbarDesktopInitialize( itemNav ){
    // Desktop Hover Nav
    let timeout = null;
    // Задержка скрытия меню 0.3сек
    itemNav
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navbarHover( nav );
            }, 100);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navbarUnHover , 300);
        });
}

function closeSideNavbar(){
    let navbar = $(".nav-menu");
    navbar.removeClass("nav-menu--active");
    $(".nav-overlay").removeClass("nav-overlay--active");
}

$(".nav-menu .nav-menu__close").on("click", function(e){
    closeSideNavbar();
});

// Mobile Navbar
$(".header .header__link.header__link_menu").on("click", function(e){
    e.preventDefault();
    let navbar = $(".nav-menu");
    if( !navbar.hasClass("nav-menu--active")){
        navbar.addClass("nav-menu--active");
        $(".nav-overlay").addClass("nav-overlay--active");
    }else{
        navbar.removeClass("nav-menu--active");
        $(".nav-overlay").removeClass("nav-overlay--active");
    }
});

$(function(){
    // Check Windows Size
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $('.navbar').removeClass("navbar--mobile").addClass("navbar--desktop");
        // Desktop Navbar
        navbarDesktopInitialize( $('.navbar.navbar--desktop .navbar__item.navbar__item_has-child') );
    }else{
        $('.navbar').removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});


// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        // Close Navigation Sidebar on Desktop
        closeSideNavbar();

        // Desktop Navbar
        navbarDesktopInitialize( $('.navbar.navbar--desktop .navbar__item.navbar__item_has-child') );

        // Remove Class
        $('.navbar').removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        // Remove Class
        $('.navbar').removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});
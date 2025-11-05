$(document).ready(function() {
    //Navbar minimize on scroll down
    $(window).scroll(function() {
        var scroll = $(window).scrollTop()
        if (scroll > 0) {
            $('.navbar').addClass('navbar-min')
        }
        else {
            $('.navbar').removeClass('navbar-min')
        }
    })

    //Temporary Team Carousel Functionality
    $('#alevison').click(function() {
        $('#carouselTeam #alevison_car').addClass('active').siblings().removeClass('active')
    })
    $('#acook').click(function() {
        $('#carouselTeam #acook_car').addClass('active').siblings().removeClass('active')
    })
    $('#hjames').click(function() {
        $('#carouselTeam #hjames_car').addClass('active').siblings().removeClass('active')
    })
    $('#tlewis').click(function() {
        $('#carouselTeam #tlewis_car').addClass('active').siblings().removeClass('active')
    })
    $('#bpinderhughes').click(function() {
        $('#carouselTeam #bpinderhughes_car').addClass('active').siblings().removeClass('active')
    })
    $('#cgrambling').click(function() {
        $('#carouselTeam #cgrambling_car').addClass('active').siblings().removeClass('active')
    })
    $('#jsylvan').click(function() {
        $('#carouselTeam #jsylvan_car').addClass('active').siblings().removeClass('active')
    })
    $('#lvorwerk').click(function() {
        $('#carouselTeam #lvorwerk_car').addClass('active').siblings().removeClass('active')
    })
    $('#crainer').click(function() {
        $('#carouselTeam #crainer_car').addClass('active').siblings().removeClass('active')
    })
    $('#mweber').click(function() {
        $('#carouselTeam #mweber_car').addClass('active').siblings().removeClass('active')
    })
    $('#jgoldstein').click(function() {
        $('#carouselTeam #jgoldstein_car').addClass('active').siblings().removeClass('active')
    })
    $('#epawlowicz').click(function() {
        $('#carouselTeam #epawlowicz_car').addClass('active').siblings().removeClass('active')
    })
    $('#adurr').click(function() {
        $('#carouselTeam #adurr_car').addClass('active').siblings().removeClass('active')
    })
    $('#ntiva').click(function() {
        $('#carouselInvestments #ntiva_car').addClass('active').siblings().removeClass('active')
    })
    $('#arc').click(function() {
        $('#carouselInvestments #arc_car').addClass('active').siblings().removeClass('active')
    })
    $('#match').click(function() {
        $('#carouselInvestments #match_car').addClass('active').siblings().removeClass('active')
    })
    $('#protos').click(function() {
        $('#carouselInvestments #protos_car').addClass('active').siblings().removeClass('active')
    })
    $('#milrose').click(function() {
        $('#carouselInvestments #milrose_car').addClass('active').siblings().removeClass('active')
    })
})
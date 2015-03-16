/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//comm change picture
function onHover1()
{
    $("#presImg").attr('src', 'img/kyung-photo.jpg');
}

function onHover2() 
{
    $("#viceImg").attr('src', 'img/chongsian-photo.jpg');
}

function onHover3() 
{
    $("#cap1Img").attr('src', 'img/ganesh-photo.jpg');
}

function onHover4() 
{
    $("#cap2Img").attr('src', 'img/sab-photo.jpg');
}

function onHover5() 
{
    $("#secImg").attr('src', 'img/weixin-photo.jpg');
}

function onHover6() 
{
    $("#treasImg").attr('src', 'img/weineng-photo.jpg');
}

function onHover7() 
{
    $("#logImg").attr('src', 'img/yingjie-photo.jpg');
}

function onHover8() 
{
    $("#welfareImg").attr('src', 'img/mar-photo.jpg');
}

function onHover9() 
{
    $("#pubImg").attr('src', 'img/hazelle-photo.jpg');
}

function onHover10() 
{
    $("#creativeImg").attr('src', 'img/yinyan-photo.jpg');
}

function offHover1()
{
    $("#presImg").attr('src', 'img/kyung-photo(grey).jpg');
}

function offHover2() 
{
    $("#viceImg").attr('src', 'img/chongsian-photo(grey).jpg');
}

function offHover3() 
{
    $("#cap1Img").attr('src', 'img/ganesh-photo(grey).jpg');
}

function offHover4() 
{
    $("#cap2Img").attr('src', 'img/sab-photo(grey).jpg');
}

function offHover5() 
{
    $("#secImg").attr('src', 'img/weixin-photo(grey).jpg');
}

function offHover6() 
{
    $("#treasImg").attr('src', 'img/weineng-photo(grey).jpg');
}

function offHover7() 
{
    $("#logImg").attr('src', 'img/yingjie-photo(grey).jpg');
}

function offHover8() 
{
    $("#welfareImg").attr('src', 'img/mar-photo(grey).jpg');
}

function offHover9() 
{
    $("#pubImg").attr('src', 'img/hazelle-photo(grey).jpg');
}

function offHover10() 
{
    $("#creativeImg").attr('src', 'img/yinyan-photo(grey).jpg');
}
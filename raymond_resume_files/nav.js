
$(document).ready(function() {
  // $("nav a").click(function() {
  //   var target = $(".section").eq($(this).index());
  //   var v_center = $(window).height() > target.height() ? $(window).height() / 2 - target.height() / 2 : 0;
  //   var position = target.offset().top - v_center;
  //   $("html,body").animate({
  //       scrollTop: position
  //   })
  // });

  $("article").scroll(function(){
    var scrollTop = $("article.show").scrollTop();
    var windowHeight = $("article.show .section").height();

    var scrollPosition = scrollTop;

    // console.log("scrollPos = "+scrollPosition);

    var index = 0;

    // 每次點就會到 $("#" + href).offset().top + $('article.show').scrollTop() - 65
    // $('article.show').scrollTop() = 哪個 $("#" + href).offset().top + $('article.show').scrollTop() - 65
    var min_distance = 100000;
    $("article.show .section").each(function(i, element) {
      var j_this = $(this);
      var this_distance = Math.abs(j_this.offset().top - 65)
      if( min_distance > this_distance ) {
        min_distance = this_distance
        index = i;
      }
    });
    $("nav span.active").removeClass("active");
    $("div.active .toggle span").eq(index).addClass("active");
    $("nav span.active").parent(".toggle").slideDown(200);
  }).scroll();

  $(".tab, nav>div, nav span").click(function() {
    var folder = $(this).attr("data-at");
    $(".tab").removeClass("active");
    $(".tab[data-at=" + folder + "]").addClass("active");
    $("nav > div").removeClass("active");
    $("nav > div[data-at=" + folder + "]").addClass("active");
    $("article").removeClass("show");
    $("article." + folder ).addClass("show");
    $("article.show").scroll();
  });
})

$(function() {
  $('nav span').click(function() {
    var href = $(this).attr("data-target");
    $('article.show').animate({
        scrollTop: $( "#" + href).offset().top + $('article.show').scrollTop() - 65 - 100
    }, 350);
    // console.log($(this).attr("data-target"));
    // console.log($( "#" + href).offset().top - $('article.show').scrollTop());
    return false;
  });

  $('.call-to-action').click(function() {
    var href = $(this).attr("data-target");
    $('article.show').animate({
        scrollTop: $( "#" + href).offset().top + $('article.show').scrollTop() - 65 - 100
    }, 350);
    console.log(href);
    return false;
  });

  $('nav>div h2').click(function() {
    $(this).next(".toggle").slideDown(150);
  })

  $('.sb-thumbnail').click(function() {
    // $('.easter-egg').css({
    //   'opacity': 1,
    //   'z-index': 2
    // });

    // $('.easter-egg').click(function() {
    //   $(this).css({
    //     'opacity': 0,
    //     'z-index': -1
    //   });
    // });
  })

  $(".main").click(function() {
    $("nav").removeClass("n-show");
    $(".hamburger").removeClass("h-hide");
    $(".call-to-action").removeClass("c-hide");
  })

  $(".hamburger").click(function() {
    $("nav").toggleClass("n-show");
    $(this).toggleClass("h-hide");
    $(".call-to-action").toggleClass("c-hide");
  })

  $("article").scroll(function() {
    $("nav").removeClass("n-show");
    $(".hamburger").removeClass("h-hide");
    $(".call-to-action").removeClass("c-hide");
  })

  $(".call-to-action").headroom({
    "offset": 205,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });
});

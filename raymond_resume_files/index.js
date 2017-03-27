$(document).ready(function() {

  $(".number-20").animateNumbers(20, true, 2800);
  $(".number-100").animateNumbers(100, true, 3800);

  $('._nav_intro, .product, .demand, .wellfare').click(function() {
    $('._nav_intro, .product, .demand, .wellfare').find('.toggle').css('display', 'none');
    $(this).find('.toggle').css('display', 'block');;
  });
});

//reveal效果
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);

var i = 0;

onkeydown = function(e){
  if(!e.metaKey) {
    var active_article_index = $('article.show').index();
    $(".fa-pencil").eq(active_article_index).addClass('active');
    $(".close-tab").eq(active_article_index).removeClass('active');
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 219){
    // cmd + [
    e.preventDefault();
    var this_index = $('.tab.active').index();
    this_index = (this_index - 1) % 4;
    $('.tab').removeClass('active');
    $('.tab').eq(this_index).click();
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 221){
    // cmd + ]
    e.preventDefault();
    var this_index = $('.tab.active').index();
    this_index = (this_index + 1) % 4;
    $('.tab').removeClass('active');
    $('.tab').eq(this_index).click();
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 83){
    // cmd + s 鉛筆變成叉叉
    e.preventDefault();
    $(".fa-pencil").removeClass('active');
    $(".close-tab").addClass('active');
  }
  if((e.metaKey || e.ctrlKey) && e.keyCode == 68){
    // cmd + d
    e.preventDefault();



    $(".tab").removeClass("active");
    $(".tab[data-at=wanted]").addClass("active");
    $("nav>div").removeClass("active");
    $("nav>div[data-at=wanted]").addClass("active");
    $("article").removeClass("show");
    $("article.wanted").addClass("show");
    j = (i % 3) + 1;
    var href = 's3-' + j;
    $('article.show').animate({
        scrollTop: $( "#" + href).offset().top + $('article.show').scrollTop() - 65 - 100
    }, 350);
    $("article.show").scroll();
    i++;
  }
}

$(function() {
  $('.reminder').click(function() {
    var this_index = $('.tab.active').index();
    this_index = (this_index + 1) % 4;
    $('.tab').removeClass('active');
    $('.tab').eq(this_index).click();
  })
});


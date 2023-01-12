$(document).ready(function(){
    $("#mycar").carousel({interval:1000});
  })
  $("#login").click(function(){
    $("#loginModal").modal("toggle");
  })

  $("#res").click(function(){
    $("#reserve").modal("toggle");
  })
  $("#carouselButton").click(function(){
    if($('#carouselButton').children('span').hasClass('fa fa-pause')){
      $('#mycar').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    }
  else if($('#carouselButton').children('span').hasClass('fa fa-play')){
      $('#mycar').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  })
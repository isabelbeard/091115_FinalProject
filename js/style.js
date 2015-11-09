$(document).ready(function() {
  // If a link has been clicked, scroll the page to the link's hash target:
  $("#next").click(function() {
    $('html, body').animate({
      scrollTop: $("#section2").offset().top -1
    }, 500);
  });

  // $("#submit1").click(function() {
  //   event.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: $("#section3").offset().top -1
  //   }, 500);
  // });

  $("#logo").click(function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#section1").offset().top -1
    }, 500);
  });

  $("#asteric").click(function() {
    event.preventDefault();
    $(".section0").removeClass();
    $('html, body').animate({
      scrollTop: $("#section0").offset().top -1
    }, 500);
  });

  $("#arrow").click(function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#section1").offset().top -1
    }, 500);
  });










});

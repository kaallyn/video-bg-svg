$(document).ready(function(){
  // Add smooth scrolling to all links

  

  $('.header-img-bg').addClass('animated bounceInDown')

  $('.hi-message').addClass('animated pulse');
  $('.headings').addClass('animated flipInX');

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.hi-message').on('click', function(event) {

    $('.hi-message').addClass('animated bounceInUp');
  });

  // $('.hi-message').addClass('animated bounceOutLeft');





}); // End dobument.ready


jQuery(document).ready(function($){
  var card = $('.port-item'),
    quote = $('.quote'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(card, offset);
  hideBlocks(quote, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(quote, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(quote, offset); });
  });

  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(card, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(card, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('not-hidden');
    });
  }
});
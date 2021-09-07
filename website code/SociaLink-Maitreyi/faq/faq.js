var clics = 0;

$(document).ready(function() {

  $('.answers').hide();
  $('#faqs-all').hide();

  $('h4').click(function() {

    $(this).next('.answers').toggle(function() {

      $(this).next('.answers');

    }, function() {

      $(this).next('.answers').fadeIn('fast');

    });

    if ($(this).hasClass('faqsup')) {
      $(this).removeClass('faqsup');
    } else {
      $(this).addClass('faqsup');
    };

    if ($('.faqsup').length >= 3) {

      $('#faqs-all').fadeIn('fast');

    } else {
      $('#faqs-all').hide();
      var abiertas = $('.faqsup').length
      console.log(abiertas);
    }
  }); //Close Function Click	            

}); //Close Function Ready

$('#faqs-all').click(function() {
  $('.answers').fadeOut(200);
  $('h4').removeClass('faqsup');
  $('#faqs-all').fadeOut('fast');
  
  
  $('#search-1').hideseek();
});
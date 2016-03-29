$(function() {
  var zakupy = ['milk', 'honey', 'cat food', 'sushi'];

  for (var i = 0; i < zakupy.length; i++) {
    $('.lista-zakupow').append($('<li/>').text(zakupy[i]));
  }

  $('.uber-button').on('click', function () {
    $('.lista-zakupow').append($('<li/>').text($('.super-input').val()));
    $('.super-input').val('');
  });

  $('ul').on('click', 'li', function() {
    if ($(this).attr('class') == 'aktywny') {
      $(this).removeClass('aktywny');
    } else {
      $(this).addClass('aktywny');
    }
  });
});

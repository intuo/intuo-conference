'use strict';

$(function() {
  var currentPosition = 0;
  particlesJS.load('particles', '/javascripts/assets/particles.json');

  function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    $('.clock').html(strTime);
  }

  setTimeout(formatAMPM(), 1000);

  function prev() {
    $('.card-user').removeClass('is-visible');
    if (currentPosition > 1) {
      --currentPosition;
    }

    if (currentPosition == 6) {
      $('.card-title').hide();
    } else {
      $('.card-title').show();
    }
  }

  function next() {
    $('.card-user').removeClass('is-visible');
    if (currentPosition < 6) {
      ++currentPosition;
    }

    if (currentPosition == 6) {
      $('.card-title').hide();
    } else {
      $('.card-title').show();
    }
  }

  $('.card-user.is-1').addClass('is-visible');

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37:
          prev();
        break;

        case 39:
          next();
        break;
    }
    $('.card-user.is-' + currentPosition).addClass('is-visible');
    e.preventDefault();
  });
});

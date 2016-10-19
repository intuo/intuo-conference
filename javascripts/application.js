'use strict';

$(function() {
  var currentPosition = 0;
  particlesJS('particles',
    {
      "particles": {
        "number": {
          "value": 15
        },
        "size": {
          "value": 2,
          "random": false
        },
        "opacity": {
          "value": 0,
          "random": false
        },
        "line_linked": {
          "enable": true,
          "distance": 300,
          "color": "#ffffff",
          "opacity": 0.50,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "bounce": true
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "hover": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 50,
            "duration": 0.2
          }
        }
      },
      "retina_detect": true
    }
  );

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

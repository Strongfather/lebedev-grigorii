
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left',prev.width() + 10)

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      modalPolicyCheckbox: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"

      },
      userPhone: "Заполните поле",
       userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }, 
      modalPolicyCheckbox: {
        required: "Заполните поле"
      },
    }
  })

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      // compound rule
      controlPolicyCheckbox: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"

      },
      userPhone: "Заполните поле",
       userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      controlPolicyCheckbox: "Заполните поле"
    }
  })

   // Валидация формы
   $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      // compound rule
      userQuestion: {
        required: true,
      },
      footerPolicyCheckbox: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"

      },
      userPhone: "Заполните поле",
       userQuestion: {
        required: "Заполните поле",
      },
      footerPolicyCheckbox:"Заполните поле"
    }
  })

// маска для телефона
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});



});

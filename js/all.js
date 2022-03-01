$(document).ready(function () {
  //--------swiper輪播---------------------
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //自動播放
    autoplay: {
      delay: 3000,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //.goDown 向下捲至聯絡我們-------------------------
  $('.goDown').click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: 9999 }, 800);
  });

});
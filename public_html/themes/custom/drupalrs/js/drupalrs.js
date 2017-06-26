/* SAMPLE JS FILE CONTENTS */

(function ($) {

  /* Mobile menu */
  $(function () {
    $('.mobile-hamburger__trigger,.sliding-panel-fade-screen').on('click touchstart', function (e) {
      $('.block-drupalrs-main-menu,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });

  /* Language switcher */
  $(function () {
    var languageActive = $('.block-language .links li.is-active').detach();
    languageActive.insertBefore($('.block-language .links li:first-child'));
  });

})(jQuery);

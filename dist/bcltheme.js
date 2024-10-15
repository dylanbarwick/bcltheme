(function ($, Drupal, drupalSettings, Cookies) {
  'use strict';

  Drupal.behaviors.bcltheme = {
    attach: function (context, settings) {
      ////////////////////////////////////////

      $('button.hamburger').click(function() {
        $('nav#block-bcltheme-main-menu ul.actual-menu').slideToggle();
      });

      ////////////////////////////////////////
    }
  };

}(jQuery, Drupal, drupalSettings, Cookies));

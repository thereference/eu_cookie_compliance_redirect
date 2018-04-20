(function ($) {
    Drupal.behaviors.redirect_cookie = {
      attach: function (context, settings) {
        window.history.go(-2);
      }
    }
})(jQuery);

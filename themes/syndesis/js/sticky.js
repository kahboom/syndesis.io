'use strict';

(function() {
  $(document).ready(function () {
    $('#sidenav').affix({
      offset: {
        top: 0,
        bottom: $('footer').outerHeight() + 50
      }
    });

    console.log($('.main-content').height() - $('.main-content').offset().top);
  });
})();

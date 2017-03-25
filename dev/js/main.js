var Pousada = {
  /**
   * instances
   * @access public
   * @desc instancias
   *
   * @type {Object}
   */
  instances: {},
  /**
   * variables
   * @access public
   * @desc variaveis
   *
   * @type {Object}
   */
  variables: {},
  /**
   * init
   * @access public
   * @desc constructor
   *
   * @return {Void}
   */
  init: function() {
    "use strict";

    Pousada.toggleMenu();
  },
   /**
   * toggleMenu
   * @access public
   * @desc mostra/esconde o menu em mobile
   *
   * @return {Void}
   */
  toggleMenu: function() {
    "use strict";

    var hamburguer = $('#hamburguer'),
        menu = $('.menu-principal');

    hamburguer.on('click', function() {
      menu.toggleClass('toggleMenu');
    });
  }
}

$(document).on("ready", function() {
  "use strict";

  Pousada.init();
});
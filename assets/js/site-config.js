/**
 * Única fuente del número WhatsApp (solo dígitos, sin + ni espacios).
 * Los href `https://wa.me/…` en HTML deben usar el mismo número para usuarios sin JS.
 * Prefill: atributo data-wa-prefill en texto plano (UTF-8) en enlaces con clase js-redagraria-wa.
 */
(function () {
  'use strict';

  var WA_PHONE = '34644174583';

  window.REDAGRARIA_SITE = Object.freeze({
    waPhoneDigits: WA_PHONE,
    waMeBase: 'https://wa.me/' + WA_PHONE,
  });

  function applyWaLinks() {
    document.querySelectorAll('a.js-redagraria-wa').forEach(function (el) {
      var pre = el.getAttribute('data-wa-prefill');
      el.href =
        pre && pre.trim().length
          ? 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(pre.trim())
          : 'https://wa.me/' + WA_PHONE;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyWaLinks);
  } else {
    applyWaLinks();
  }
})();

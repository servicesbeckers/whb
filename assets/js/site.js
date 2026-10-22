// Werkhuizen Beckers: menu, contactformulier en taalsuggestie. Geen dependencies.
(function () {
  'use strict';

  // Menu op mobiel
  var knop = document.querySelector('.menuknop');
  var menu = document.getElementById('hoofdmenu');
  if (knop && menu) {
    var zet = function (open) {
      knop.setAttribute('aria-expanded', String(open));
      knop.setAttribute('aria-label', open ? knop.dataset.sluiten : knop.dataset.open);
      menu.classList.toggle('is-open', open);
    };
    knop.addEventListener('click', function () {
      zet(knop.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) zet(false);
    });
  }

  // Contactformulier via Web3Forms
  Array.prototype.forEach.call(document.querySelectorAll('.formulier'), function (form) {
    var status = form.querySelector('.formulier-status');
    var verzend = form.querySelector('button[type="submit"]');
    var tel = form.elements.telefoon;
    var mail = form.elements.email;
    var dringend = form.elements.dringend;
    var onderwerp = form.elements.subject;

    var melding = function (soort, tekst) {
      status.className = 'formulier-status is-' + soort;
      status.textContent = tekst;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!tel.value.trim() && !mail.value.trim()) {
        melding('fout', form.dataset.foutContact);
        tel.focus();
        return;
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      onderwerp.value = dringend.checked ? form.dataset.onderwerpDringend : form.dataset.onderwerp;
      melding('bezig', form.dataset.bezig);
      verzend.disabled = true;

      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (!res.success) throw new Error(res.message);
          form.reset();
          melding('gelukt', form.dataset.gelukt);
        })
        .catch(function () { melding('fout', form.dataset.mislukt); })
        .then(function () { verzend.disabled = false; });
    });
  });

  // Taalsuggestie: nooit automatisch doorsturen, enkel een balk tonen.
  var balk = document.querySelector('.taalsuggestie');
  var data = balk && balk.querySelector('.taalsuggestie-data');
  if (balk && data) {
    var paginaTaal = document.documentElement.lang.slice(0, 2);
    var browserTaal = (navigator.language || '').slice(0, 2).toLowerCase();
    var alts = JSON.parse(data.textContent);
    var weg = false;
    try { weg = localStorage.getItem('wb-taalsuggestie') === 'weg'; } catch (e) {}
    var doel = alts[browserTaal];
    if (!weg && doel && browserTaal !== paginaTaal) {
      balk.querySelector('.taalsuggestie-tekst').textContent = doel.tekst;
      var link = balk.querySelector('.taalsuggestie-link');
      link.textContent = doel.link;
      link.href = doel.url;
      link.hreflang = browserTaal;
      link.lang = browserTaal;
      var sluit = balk.querySelector('.taalsuggestie-sluit');
      sluit.setAttribute('aria-label', doel.sluiten);
      sluit.addEventListener('click', function () {
        balk.hidden = true;
        try { localStorage.setItem('wb-taalsuggestie', 'weg'); } catch (e) {}
      });
      balk.hidden = false;
    }
  }
})();

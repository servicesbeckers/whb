---
layout: home
title: Home
---
<section class="hero section">
  <div class="container hero-grid">
    <div>
      <div class="eyebrow">B2B lasmaatwerk</div>
      <h1>Lasmaatwerk in <span>inox</span> en <span>aluminium</span></h1>
      <p class="lead">Voor industrie, machinebouw en technische toepassingen. Ook staal op maat waar nodig.</p>
      <div class="button-row">
        <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Vraag een offerte aan</a>
        <a class="button button-secondary" href="{{ '/projecten/' | relative_url }}">Bekijk projecten</a>
      </div>
    </div>
    <div class="hero-card">
      <div class="hero-stat">
        <strong>Inox & aluminium</strong>
        <span>Kernfocus voor nette, duurzame maatwerkoplossingen.</span>
      </div>
      <div class="hero-stat">
        <strong>Unieke stukken & kleine series</strong>
        <span>Volgens plan, schets of praktische afstemming.</span>
      </div>
      <div class="hero-stat">
        <strong>Zakelijke aanpak</strong>
        <span>Duidelijke communicatie, compacte doorlooptijd en functioneel resultaat.</span>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-heading">
      <div class="eyebrow">Waarvoor u bij ons terechtkunt</div>
      <h2>Maatwerk voor professionele toepassingen</h2>
      <p>De site is bewust opgebouwd rond toepassingen en werkwijze. Zo blijft de presentatie sterk, ook wanneer u nog niet veel projectfoto's hebt.</p>
    </div>
    <div class="card-grid">
      <article class="info-card">
        <h3>Inox maatwerk</h3>
        <p>Voor toepassingen waar afwerking, hygiëne en corrosiebestendigheid belangrijk zijn.</p>
      </article>
      <article class="info-card">
        <h3>Aluminium constructies</h3>
        <p>Licht, sterk en geschikt voor technische maatwerkoplossingen en onderdelen.</p>
      </article>
      <article class="info-card">
        <h3>Staal op aanvraag</h3>
        <p>Inzetbaar voor functionele constructies en aanvullende maatwerkprojecten.</p>
      </article>
      <article class="info-card">
        <h3>Kleine series en prototypes</h3>
        <p>Interessant voor bedrijven die snel willen schakelen voor beperkte aantallen of een eerste uitvoering.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container grid two-col">
    <div>
      <div class="section-heading left">
        <div class="eyebrow">Werkwijze</div>
        <h2>Van idee of plan naar uitvoerbaar maatwerk</h2>
      </div>
      <div class="prose compact">
        <p>U hoeft geen uitgebreide fotobibliotheek te hebben om professioneel over te komen. Daarom zet deze website vooral in op duidelijke toepassingen, materiaalkeuze en een verzorgde presentatie van elk project.</p>
        <p>Nieuwe projecten worden automatisch zichtbaar zodra u een map met foto's pusht naar GitHub. De projectpagina en galerij worden dan tijdens de build gegenereerd.</p>
      </div>
    </div>
    <div class="steps">
      <div class="step"><strong>1.</strong><span>Bespreek uw toepassing, schets of plan.</span></div>
      <div class="step"><strong>2.</strong><span>Kies materiaal: inox, aluminium of staal.</span></div>
      <div class="step"><strong>3.</strong><span>Werk uit als uniek stuk of kleine serie.</span></div>
      <div class="step"><strong>4.</strong><span>Lever het project professioneel op de site op via duidelijke visuals en projectinfo.</span></div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-heading">
      <div class="eyebrow">Projecten</div>
      <h2>Recent toegevoegd</h2>
    </div>
    {% assign featured_projects = site.projects | sort: 'title' %}
    {% if featured_projects.size > 0 %}
      <div class="project-grid">
        {% for project in featured_projects limit: 6 %}
          {% include project-card.html project=project %}
        {% endfor %}
      </div>
    {% else %}
      <div class="empty-state">
        <p>Nog geen projecten gepubliceerd. Voeg een projectmap toe in <code>assets/projects/</code> en de site toont die automatisch.</p>
      </div>
    {% endif %}
  </div>
</section>

<section class="section cta-section">
  <div class="container cta-card">
    <div>
      <div class="eyebrow">Contact</div>
      <h2>Een project bespreken?</h2>
      <p>Stuur een foto, schets of plan door en maak van uw vraag snel iets concreets.</p>
    </div>
    <div class="button-row">
      <a class="button button-primary" href="mailto:info@beckersservices.be">Mail ons</a>
      <a class="button button-secondary" href="tel:+32000000000">Bel ons</a>
    </div>
  </div>
</section>

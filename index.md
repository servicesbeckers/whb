---
layout: home
title: Home
---
<section class="hero-section">
  <div class="container hero-layout">
    <div>
      <span class="section-kicker">B2B lasmaatwerk</span>
      <h1>Professioneel maatwerk in <span>inox</span> en <span>aluminium</span></h1>
      <p class="hero-lead">Voor industrie, machinebouw en technische toepassingen. Ook staal op maat waar nodig.</p>
      <div class="button-row">
        <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Vraag een offerte aan</a>
        <a class="button button-secondary" href="{{ '/projecten/' | relative_url }}">Bekijk projecten</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hero-panel-card">
        <strong>Waarop deze site focust</strong>
        <ul>
          <li>Inox en aluminium als kernmaterialen</li>
          <li>Zakelijke uitstraling zonder veel foto's nodig te hebben</li>
          <li>Projecten die automatisch verschijnen op de website</li>
          <li>Compacte, professionele presentatie voor B2B-klanten</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="diensten" class="section-block surface-dark">
  <div class="container">
    <div class="section-heading max-copy">
      <span class="section-kicker">Diensten</span>
      <h2>Maatwerk voor professionele toepassingen</h2>
      <p>De website is inhoudelijk opgebouwd rond toepassing, materiaal en resultaat. Zo komt ze professioneel over, ook als je voorlopig nog weinig projectfoto's hebt.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Inox maatwerk</h3>
        <p>Voor toepassingen waar afwerking, duurzaamheid en corrosiebestendigheid belangrijk zijn.</p>
      </article>
      <article class="feature-card">
        <h3>Aluminium constructies</h3>
        <p>Lichte en sterke oplossingen voor technische maatwerkprojecten en functionele onderdelen.</p>
      </article>
      <article class="feature-card">
        <h3>Staal op aanvraag</h3>
        <p>Aanvullend mogelijk voor specifieke constructies en praktische toepassingen.</p>
      </article>
      <article class="feature-card">
        <h3>Unieke stukken en kleine series</h3>
        <p>Interessant voor bedrijven die snel willen schakelen bij prototypes of beperkte aantallen.</p>
      </article>
    </div>
  </div>
</section>

<section id="werkwijze" class="section-block">
  <div class="container info-split">
    <div>
      <div class="section-heading left max-copy">
        <span class="section-kicker">Werkwijze</span>
        <h2>Van plan of idee naar uitvoerbaar maatwerk</h2>
      </div>
      <div class="prose rich-copy">
        <p>Je hoeft niet te doen alsof je al een enorme portfolio hebt. De juiste aanpak is om je site te laten focussen op technische toepassingen, materiaalkeuze en een verzorgde projectpresentatie.</p>
        <p>Elke projectmap die je toevoegt onder <code>assets/projects/</code> kan automatisch op de website verschijnen. Voeg optioneel een <code>README.md</code> toe met titel, materiaal, categorie en beschrijving.</p>
      </div>
    </div>
    <div class="process-list">
      <div class="process-item"><strong>1</strong><span>Stuur een plan, schets of foto door.</span></div>
      <div class="process-item"><strong>2</strong><span>Kies materiaal: inox, aluminium of staal.</span></div>
      <div class="process-item"><strong>3</strong><span>Werk uit als uniek stuk of kleine serie.</span></div>
      <div class="process-item"><strong>4</strong><span>Publiceer het project professioneel op de site.</span></div>
    </div>
  </div>
</section>

<section class="section-block surface-dark">
  <div class="container">
    <div class="section-heading max-copy">
      <span class="section-kicker">Projecten</span>
      <h2>Bekijk recente projecten</h2>
    </div>
    {% assign featured_projects = site.projects | sort: 'title' %}
    {% if featured_projects.size > 0 %}
      <div class="project-grid">
        {% for project in featured_projects limit: 6 %}
          {% include project-card.html project=project %}
        {% endfor %}
      </div>
      <div class="section-actions">
        <a class="button button-secondary" href="{{ '/projecten/' | relative_url }}">Alle projecten bekijken</a>
      </div>
    {% else %}
      <div class="empty-state wide-state">
        <h3>Nog geen projecten zichtbaar</h3>
        <p>Maak een map aan in <code>assets/projects/</code>, zet daar je foto's in, en voeg optioneel een <code>README.md</code> toe. De GitHub Pages build maakt dan automatisch de projectpagina aan.</p>
      </div>
    {% endif %}
  </div>
</section>

<section class="section-block">
  <div class="container cta-banner">
    <div>
      <span class="section-kicker">Contact</span>
      <h2>Een project bespreken?</h2>
      <p>Stuur een foto, schets of plan door en maak van je vraag snel iets concreets.</p>
    </div>
    <div class="button-row">
      <a class="button button-primary" href="mailto:info@beckersservices.be">Mail ons</a>
      <a class="button button-secondary" href="tel:+32000000000">Bel ons</a>
    </div>
  </div>
</section>

<section class="projects-shell">
  <div class="container">
    <h2>Projecten</h2>
    {% assign featured_projects = site.projects | sort: 'title' %}
    {% if featured_projects.size > 0 %}
      <div class="project-grid project-grid-large">
        {% for project in featured_projects limit:6 %}
          {% include project-card.html project=project %}
        {% endfor %}
      </div>
    {% else %}
      <p>Nog geen projecten gepubliceerd.</p>
    {% endif %}
  </div>
</section>

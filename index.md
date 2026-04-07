---
layout: home
title: Home
---

<section class="hero-section">
  <div class="container hero-layout">
    <div>
      <span class="section-kicker">Metaalbewerking op maat</span>
      <h1>Vakwerk in <span>staal</span>, <span>RVS</span> en <span>aluminium</span></h1>
      <p class="hero-lead">
        Werkhuizen Beckers realiseert duurzame en functionele oplossingen op maat
        voor particulieren en professionele toepassingen.
      </p>
      <div class="button-row">
        <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Vraag een offerte aan</a>
        <a class="button button-secondary" href="{{ '/projecten/' | relative_url }}">Bekijk projecten</a>
      </div>
    </div>
  </div>
</section>

<section id="diensten" class="section-block surface-dark">
  <div class="container">
    <div class="section-heading max-copy">
      <span class="section-kicker">Diensten</span>
      <h2>Maatwerk voor uiteenlopende toepassingen</h2>
      <p>
        Van functionele constructies tot verfijnde afwerking: wij leveren metaalwerk
        op maat met aandacht voor kwaliteit, precisie en duurzaamheid.
      </p>
    </div>

    <div class="feature-grid">
      <article class="feature-card">
        <h3>Herstellingen ter plaatsen</h3>
        <p>Snelle en betrouwbare herstellingen bij u ter plaatse. Elk probleem wordt efficiënt aangepakt, zodat u snel weer verder kunt. Minimale stilstand, maximale service.</p>
      </article>

      <article class="feature-card">
        <h3>Staal maatwerk</h3>
        <p>Robuust en veelzijdig. Staal biedt maximale stevigheid en draagkracht, ideaal voor constructies en toepassingen waar kracht en stabiliteit essentieel zijn.</p>
      </article>

      <article class="feature-card">
        <h3>RVS maatwerk</h3>
        <p>Duurzaam, hygiënisch en onderhoudsvriendelijk. Inox is bestand tegen roest en slijtage, perfect voor maatwerk in omgevingen waar kwaliteit, netheid en lange levensduur centraal staan.</p>
      </article>

      <article class="feature-card">
        <h3>Aluminium maatwerk</h3>
        <p>Licht en toch sterk. Aluminium is corrosiebestendig en ideaal voor toepassingen waar duurzaamheid en een strakke afwerking belangrijk zijn. Geschikt voor zowel binnen- als buitenafwerkingen.</p>
      </article>
    </div>
  </div>
</section>

<section id="werkwijze" class="section-block">
  <div class="container info-split">
    <div>
      <div class="section-heading left max-copy">
        <span class="section-kicker">Werkwijze</span>
        <h2>Van idee tot afgewerkt resultaat</h2>
      </div>

      <div class="prose rich-copy">
        <p>
          Elk project begint bij uw probleemstelling, vraag, idee of plan. Van daaruit bekijken we
          samen welke oplossing het beste past, welke materialen nodig zijn en hoe we dit praktisch kunnen realiseren.
        </p>
        <p>
          Zo ontstaat maatwerk dat niet alleen technisch klopt, maar ook duurzaam,
          functioneel en netjes afgewerkt is.
        </p>
      </div>
    </div>

    <div class="process-list">
      <div class="process-item"><strong>1</strong><span>Bezorg ons een foto, schets of plan.</span></div>
      <div class="process-item"><strong>2</strong><span>We bespreken materiaal, afmetingen en toepassing.</span></div>
      <div class="process-item"><strong>3</strong><span>U ontvangt een duidelijke aanpak of offerte op maat.</span></div>
      <div class="process-item"><strong>4</strong><span>We zorgen voor een professionele uitvoering en afwerking.</span></div>
    </div>
  </div>
</section>

<section class="section-block surface-dark">
  <div class="container">
    <div class="section-heading max-copy">
      <span class="section-kicker">Projecten</span>
      <h2>Bekijk een selectie van onze realisaties</h2>
      <p>
        Ontdek hoe wij maatwerk in staal, RVS en aluminium vertalen naar duurzame
        en praktische oplossingen.
      </p>
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
        <h3>Binnenkort meer projecten online</h3>
        <p>
          We vullen deze pagina stap voor stap aan met recente realisaties.
          Kom binnenkort gerust opnieuw kijken voor meer inspiratie.
        </p>
      </div>
    {% endif %}
  </div>
</section>

<section class="section-block">
  <div class="container cta-banner">
    <div>
      <span class="section-kicker">Contact</span>
      <h2>Een project bespreken?</h2>
      <p>
        Stuur ons een foto, schets of plan door en ontvang snel een gerichte reactie.
      </p>
    </div>

    <div class="button-row">
      <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Offerte aanvragen</a>
      <a class="button button-secondary" href="tel:+32476063285">Bel ons</a>
    </div>
  </div>
</section>

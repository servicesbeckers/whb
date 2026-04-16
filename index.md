---
layout: home
title: Home
description: Metaalbewerking op maat in staal, inox en aluminium voor industrie, machinebouw, technische toepassingen en particuliere projecten.
---

<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Werkhuizen Beckers</p>
      <h1>Metaalbewerking op maat met een strakke uitvoering en duidelijke aanpak.</h1>
      <p class="hero-intro">
        Wij realiseren maatwerk in staal, inox en aluminium voor industrie, machinebouw, technische toepassingen en particuliere projecten. 
        Van enkel stuk tot kleine reeks, altijd met focus op functionaliteit, afwerking en betrouwbaarheid.
      </p>

      <div class="hero-actions">
        <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Offerte aanvragen</a>
        <a class="button button-secondary" href="{{ '/projecten/' | relative_url }}">Bekijk projecten</a>
      </div>

      <ul class="hero-points">
        <li>Staal, inox en aluminium</li>
        <li>Van idee of schets tot uitvoering</li>
        <li>Voor bedrijven én particulieren</li>
      </ul>
    </div>

    <div class="hero-panel">
      <div class="hero-card">
        <span class="hero-card-label">Praktisch maatwerk</span>
        <h2>Geen overbodige franjes. Wel degelijk werk dat klopt.</h2>
        <p>
          We denken mee over materiaalkeuze, constructie, afmetingen en afwerking, zodat het eindresultaat niet alleen mooi oogt maar ook technisch logisch is.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="diensten">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Diensten</p>
        <h2>Maatwerk voor uiteenlopende toepassingen</h2>
      </div>
      <p class="section-lead">
        Elke aanvraag vertrekt vanuit gebruik, omgeving en gewenste afwerking. Zo krijg je een oplossing die technisch én praktisch juist zit.
      </p>
    </div>

    <div class="card-grid">
      <article class="info-card">
        <h3>Staalconstructies op maat</h3>
        <p>Stevige en functionele oplossingen voor dragende constructies, frames, steunen, werkstukken en specifieke toepassingen.</p>
      </article>

      <article class="info-card">
        <h3>Inox maatwerk</h3>
        <p>Ideaal wanneer afwerking, hygiëne, corrosiebestendigheid en duurzaamheid een belangrijke rol spelen.</p>
      </article>

      <article class="info-card">
        <h3>Aluminium maatwerk</h3>
        <p>Licht, sterk en geschikt voor toepassingen waar gewicht, verwerkbaarheid en nette afwerking belangrijk zijn.</p>
      </article>

      <article class="info-card">
        <h3>Herstellingen en aanpassingen</h3>
        <p>Ook voor het aanpassen, herstellen of verbeteren van bestaande metalen onderdelen of constructies.</p>
      </article>

      <article class="info-card">
        <h3>Enkele stuks en kleine reeksen</h3>
        <p>Interessant voor prototypes, éénmalige oplossingen of beperkte producties waar flexibiliteit nodig is.</p>
      </article>

      <article class="info-card">
        <h3>Technisch meedenken</h3>
        <p>Heb je enkel een idee, schets of voorbeeld? Dan denken we mee over uitvoering, materiaalkeuze en haalbaarheid.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section-dark" id="werkwijze">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Werkwijze</p>
        <h2>Van aanvraag tot afgewerkt resultaat</h2>
      </div>
      <p class="section-lead">
        We houden het traject helder, zodat je snel weet wat mogelijk is en waarop je kan rekenen.
      </p>
    </div>

    <div class="steps-grid">
      <article class="step-card">
        <span class="step-number">01</span>
        <h3>Bespreking van je vraag</h3>
        <p>Je bezorgt ons een plan, schets, foto of omschrijving van wat je nodig hebt.</p>
      </article>

      <article class="step-card">
        <span class="step-number">02</span>
        <h3>Technische inschatting</h3>
        <p>We bekijken afmetingen, toepassing, materiaal en de meest logische uitvoering.</p>
      </article>

      <article class="step-card">
        <span class="step-number">03</span>
        <h3>Duidelijke offerte</h3>
        <p>Je ontvangt een voorstel op maat, afgestemd op de vraag en gewenste afwerking.</p>
      </article>

      <article class="step-card">
        <span class="step-number">04</span>
        <h3>Uitvoering met zorg</h3>
        <p>We werken nauwkeurig af en focussen op een duurzaam en praktisch eindresultaat.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Waarom kiezen voor ons</p>
        <h2>Rechttoe rechtaan samenwerken</h2>
      </div>
      <p class="section-lead">
        Je zoekt geen marketingverhaal, maar iemand die correct werk levert en helder communiceert. Precies daarop leggen wij de nadruk.
      </p>
    </div>

    <div class="feature-strip">
      <div class="feature-item">
        <strong>Duidelijke communicatie</strong>
        <span>Heldere afspraken en realistische verwachtingen.</span>
      </div>
      <div class="feature-item">
        <strong>Degelijke uitvoering</strong>
        <span>Focus op kwaliteit, functionaliteit en afwerking.</span>
      </div>
      <div class="feature-item">
        <strong>Flexibel maatwerk</strong>
        <span>Van één stuk tot kleine reeks, aangepast aan je project.</span>
      </div>
    </div>
  </div>
</section>

<section class="section" id="projecten">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Projecten</p>
        <h2>Recente realisaties</h2>
      </div>
      <p class="section-lead">
        Een selectie van projecten die tonen hoe we materiaal, toepassing en afwerking samenbrengen in functioneel maatwerk.
      </p>
    </div>

    {% assign featured_projects = site.projects | sort: 'title' %}
    {% if featured_projects.size > 0 %}
      <div class="projects-grid">
        {% for project in featured_projects limit: 6 %}
          {% include project-card.html project=project %}
        {% endfor %}
      </div>

      <div class="section-actions">
        <a class="button button-secondary" href="{{ '/projecten/' | relative_url }}">Alle projecten bekijken</a>
      </div>
    {% else %}
      <div class="empty-state">
        <h3>Nog geen projecten zichtbaar</h3>
        <p>Voeg een projectmap toe in <code>assets/projects/</code> met foto's en eventueel een <code>README.md</code>. Daarna verschijnt het project automatisch op de site.</p>
      </div>
    {% endif %}
  </div>
</section>

<section class="cta-section">
  <div class="container cta-box">
    <div>
      <p class="eyebrow">Contact</p>
      <h2>Een project in gedachten?</h2>
      <p>
        Stuur gerust een foto, schets, plan of korte omschrijving door. Dan bekijken we samen wat technisch en praktisch de beste oplossing is.
      </p>
    </div>

    <div class="cta-actions">
      <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Neem contact op</a>
      <a class="button button-text" href="mailto:info@werkhuizenbeckers.be">info@werkhuizenbeckers.be</a>
    </div>
  </div>
</section>

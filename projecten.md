---
layout: page
title: Projecten
intro: Projecten worden automatisch opgebouwd op basis van de mappen in assets/projects.
permalink: /projecten/
---

{% assign all_projects = site.projects | sort: 'title' %}

{% if all_projects.size > 0 %}
<div class="project-grid">
  {% for project in all_projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
{% else %}
<div class="empty-state">
  <p>Nog geen projectmappen gevonden. Voeg een map toe in <code>assets/projects/</code> met foto's en eventueel een <code>README.md</code>.</p>
</div>
{% endif %}

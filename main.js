(function () {
  var S = window.SITE, $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var mark = '<span class="mark"><b>A</b><i>P</i></span>';
  var map = function (a, f) { return a.map(f).join(''); };

  document.title = S.name + ' | ' + S.tagline;
  $('brand').innerHTML = mark + '<span class="t">' + esc(S.name) + '</span>';
  $('navlist').innerHTML = map(S.nav, function (n) { return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + '</a></li>'; });

  $('home').innerHTML = '<div class="wrap hero"><div><h1>' + esc(S.hero.title) + '</h1><p style="font-size:1.2rem">' + esc(S.hero.text) + '</p><div class="row">' +
    map(S.hero.buttons, function (b) { return '<a class="btn alt" href="' + esc(b.href) + '">' + esc(b.label) + '</a>'; }) +
    '</div></div><div class="big" aria-hidden="true"><b>A</b><i>P</i><small>' + esc(S.tagline) + '</small></div></div>';

  $('about').innerHTML = '<div class="wrap split"><div><h2>About us</h2><p class="lead">' + esc(S.about.lead) + '</p>' +
    map(S.about.paragraphs, function (p) { return '<p>' + esc(p) + '</p>'; }) + '</div><ul class="list">' +
    map(S.about.highlights, function (h) { return '<li><strong>' + esc(h.title) + '</strong>' + esc(h.text) + '</li>'; }) + '</ul></div>';

  var f = S.updates.featured;
  $('updates').innerHTML = '<div class="wrap"><h2>Latest updates</h2><p class="lead">' + esc(S.updates.lead) + '</p>' +
    '<div class="feature"><div class="date"><big>' + esc(f.day) + '</big>' + esc(f.month) + '</div><div><span class="tag">' + esc(f.label) +
    '</span><h3>' + esc(f.title) + '</h3><p>' + esc(f.text) + '</p><a class="btn" href="' + esc(f.href) + '">' + esc(f.button) + '</a></div></div>' +
    '<div class="news">' + map(S.updates.news, function (n) { return '<article><time>' + esc(n.when) + '</time><h3>' + esc(n.title) + '</h3><p>' + esc(n.text) + '</p></article>'; }) + '</div></div>';

  $('productions').innerHTML = '<div class="wrap"><h2>Our productions</h2><p class="lead">' + esc(S.productions.lead) + '</p><div class="plays">' +
    map(S.productions.plays, function (p) { return '<div class="play"><div class="top">' + esc(p.title) + '</div><div class="in"><p>' + esc(p.text) + '</p><span class="by">' + esc(p.by) + '</span></div></div>'; }) + '</div></div>';

  $('schools').innerHTML = '<div class="wrap split"><div><h2>Shows for schools</h2><p class="lead">' + esc(S.schools.lead) + '</p><p>' + esc(S.schools.text) +
    '</p><div class="row"><a class="btn alt" style="background:var(--paper)" href="#contact">' + esc(S.schools.button) + '</a></div></div><ul class="list">' +
    map(S.schools.points, function (p) { return '<li><strong>' + esc(p.title) + '</strong>' + esc(p.text) + '</li>'; }) + '</ul></div>';

  $('school').innerHTML = '<div class="wrap"><h2>Acting school</h2><p class="lead">' + esc(S.actingSchool.lead) + '</p><div class="classes">' +
    map(S.actingSchool.classes, function (c) { return '<div><h3>' + esc(c.title) + '</h3><p>' + esc(c.text) + '</p></div>'; }) +
    '</div><div class="row"><a class="btn" href="#contact">' + esc(S.actingSchool.button) + '</a></div></div>';

  var c = S.contact;
  $('contact').innerHTML = '<div class="wrap"><h2>Contact us</h2><p class="lead">' + esc(c.lead) + '</p><div class="cards">' +
    map(c.cards, function (k) { return '<div><h3>' + esc(k.label) + '</h3><p>' + (k.href ? '<a href="' + esc(k.href) + '">' + esc(k.value) + '</a>' : esc(k.value)) + '</p></div>'; }) +
    '</div><form id="f"><div><label for="n">Name</label><input id="n" required></div><div><label for="e">Your email</label><input id="e" type="email" required></div>' +
    '<div><label for="t">I am asking about</label><select id="t">' + map(c.topics, function (t) { return '<option>' + esc(t) + '</option>'; }) + '</select></div>' +
    '<div><label for="m">Message</label><textarea id="m" rows="4"></textarea></div><button class="btn" type="submit">Send message</button></form></div>';

  $('foot').innerHTML = '<div><a class="brand" href="#home" style="color:#fff">' + mark + '<span class="t">' + esc(S.name) + '</span></a><p>' + esc(S.tagline) +
    '</p><p>&copy; ' + new Date().getFullYear() + ' ' + esc(S.name) + '. All rights reserved.</p></div><ul aria-label="Footer">' +
    map(S.nav.filter(function (n) { return n.href !== '#home'; }), function (n) { return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + '</a></li>'; }) + '</ul>';

  var b = $('menu'), nav = $('nav');
  b.onclick = function () { var o = nav.classList.toggle('open'); b.setAttribute('aria-expanded', o); };
  nav.onclick = function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); b.setAttribute('aria-expanded', false); } };

  $('f').onsubmit = function (e) {
    e.preventDefault();
    var body = 'Name: ' + $('n').value + '\nEmail: ' + $('e').value + '\n\n' + $('m').value;
    location.href = 'mailto:' + c.email + '?subject=' + encodeURIComponent($('t').value) + '&body=' + encodeURIComponent(body);
  };
})();

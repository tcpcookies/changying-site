// CHAMWIN site - interactions
document.addEventListener('DOMContentLoaded', function () {
  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Quote form -> compose email in mail client
  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      var subject = 'RFQ: ' + (v('product') || 'Woven Bags') + ' - ' + (v('name') || 'New Inquiry');
      var body =
        'Name: ' + v('name') + '\n' +
        'Company: ' + (v('company') || '-') + '\n' +
        'Email: ' + v('email') + '\n' +
        'WhatsApp/Phone: ' + (v('whatsapp') || '-') + '\n' +
        'Product Type: ' + v('product') + '\n' +
        'Est. Quantity: ' + (v('quantity') || '-') + '\n\n' +
        'Message:\n' + v('message') + '\n';
      window.location.href = 'mailto:sales@chamwinpack.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});

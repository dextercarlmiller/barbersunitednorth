// Close mobile nav when any link inside it is clicked (not label)
document.querySelectorAll('.nav__mobile-menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('nav-toggle').checked = false;
  });
});

// Highlight today's hours row
(function highlightToday() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var today = days[new Date().getDay()];
  var rows = document.querySelectorAll('.hours-table tr');
  rows.forEach(function (row) {
    var dayCell = row.querySelector('.hours-table__day');
    if (dayCell && dayCell.textContent.trim() === today) {
      row.classList.add('is-today');
    }
  });
})();

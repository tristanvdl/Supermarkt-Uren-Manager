function getWage() {
  var hours = [];

  for (var i = 0; i <= 27; i++) {
    var getHours = parseFloat(localStorage.getItem("inputDay" + i + ""));
    hours.push(getHours);
  }
  var totalHours = hours.reduce(calcDays, 0);

  function calcDays(previous, next) {
    return previous + next;
  }

  $("#formRefresh").on('submit', function() {
    return false;
  });

  document.getElementById("formRefresh").addEventListener('submit', function() {
    getWage();
  });

  document.getElementById('finalHours').innerHTML = totalHours + " uur";
}

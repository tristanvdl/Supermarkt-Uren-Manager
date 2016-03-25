function setHoursDay() {
  for (var i = 0; i <= 27; i++) {

    (function submitHours(i) {
      document.getElementById("formDay" + i + "").addEventListener('submit', function() {
        var setHours = document.getElementById("inputDay" + i + "").value;
        if (setHours == "") {
          var test = localStorage.setItem("inputDay" + i + "", 0);
        } else {
          var test = localStorage.setItem("inputDay" + i + "", setHours);
        }
        getHoursDay();
      });

      function getHoursDay() {
        var getHours = localStorage.getItem("inputDay" + i + "");
        if (getHours == null) {
          localStorage.setItem("inputDay" + i + "", 0);
          var getHours = localStorage.getItem("inputDay" + i + "");
          var stats = document.getElementById("resultDay" + i + "").innerHTML = getHours;
        } else {
          document.getElementById("resultDay" + i + "").innerHTML = getHours;
        }
      }

      $("#formDay" + i + "").on('submit', function() {
        return false;
      });

      getHoursDay();
    }(i));
  }
}

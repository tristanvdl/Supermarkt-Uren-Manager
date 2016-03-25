function createWeek() {
  var htmlWeek1 = "",
    htmlWeek2 = "",
    htmlWeek3 = "",
    htmlWeek4 = "";

  for (var i = 0; i <= 6; i++) {
    htmlWeek1 += "<td><span id=\"resultDay" + i + "\">" + 0 + "</span><span class=\"popupStyle\"><a href=\"#day" + i + "Popup\" data-rel=\"popup\" data-position-to=\"window\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">Bewerk</a></span><div data-role=\"popup\" id=\"day" + i + "Popup\" class=\"ui-content popupBG\"><form id=\"formDay" + i + "\"><input id=\"inputDay" + i + "\" type=\"text\"><input type=\"submit\" value=\"Submit\"></form></td>";
  };

  for (var i = 7; i <= 13; i++) {
    htmlWeek2 += "<td><span id=\"resultDay" + i + "\">" + 0 + "</span><span class=\"popupStyle\"><a href=\"#day" + i + "Popup\" data-rel=\"popup\" data-position-to=\"window\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">Bewerk</a></span><div data-role=\"popup\" id=\"day" + i + "Popup\" class=\"ui-content popupBG\"><form id=\"formDay" + i + "\"><input id=\"inputDay" + i + "\" type=\"text\"><input type=\"submit\" value=\"Submit\"></form></td>";
  };

  for (var i = 14; i <= 20; i++) {
    htmlWeek3 += "<td><span id=\"resultDay" + i + "\">" + 0 + "</span><span class=\"popupStyle\"><a href=\"#day" + i + "Popup\" data-rel=\"popup\" data-position-to=\"window\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">Bewerk</a></span><div data-role=\"popup\" id=\"day" + i + "Popup\" class=\"ui-content popupBG\"><form id=\"formDay" + i + "\"><input id=\"inputDay" + i + "\" type=\"text\"><input type=\"submit\" value=\"Submit\"></form></td>";
  };

  for (var i = 21; i <= 27; i++) {
    htmlWeek4 += "<td><span id=\"resultDay" + i + "\">" + 0 + "</span><span class=\"popupStyle\"><a href=\"#day" + i + "Popup\" data-rel=\"popup\" data-position-to=\"window\" data-position-to=\"window\" class=\"\" data-transition=\"pop\">Bewerk</a></span><div data-role=\"popup\" id=\"day" + i + "Popup\" class=\"ui-content popupBG\"><form id=\"formDay" + i + "\"><input id=\"inputDay" + i + "\" type=\"text\"><input type=\"submit\" value=\"Submit\"></form></td>";
  };

  var inputWeek1 = htmlWeek1,
    inputWeek2 = htmlWeek2,
    inputWeek3 = htmlWeek3,
    inputWeek4 = htmlWeek4;

  document.getElementById("week1Cont").innerHTML = inputWeek1;
  document.getElementById("week2Cont").innerHTML = inputWeek2;
  document.getElementById("week3Cont").innerHTML = inputWeek3;
  document.getElementById("week4Cont").innerHTML = inputWeek4;
}

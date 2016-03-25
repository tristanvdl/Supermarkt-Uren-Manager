function setHoursDay(form, inputId, key, resultInputId) {
    document.querySelector(form).addEventListener('submit', function() {
        var hours = document.getElementById(inputId).value;
        localStorage.setItem(key, hours);
        getHoursDay(key, resultInputId);
    });
}


function getHoursDay(key, changeId) {
    var getHours = localStorage.getItem(key);
    if (getHours != null) {
        var stats = document.getElementById(changeId).innerHTML = "<span class=\"marginHours\">" + getHours + " uur.</span>";
    } else {
        localStorage.setItem(key, 0);
        var getHours = parseFloat(localStorage.getItem(key));
        var stats = document.getElementById(changeId).innerHTML = "<span class=\"marginHours\">" + getHours + " uur.</span>";
    }
};

function falseForm(form) {
    $(form).on('submit', function() {
        return false;
    });
}

function setInfo(form, inputId, key, resultInputId) {
    document.querySelector(form).addEventListener('submit', function() {
        var info = document.getElementById(inputId).value;
        localStorage.setItem(key, info);
        getInfo(key, resultInputId);
    });
}

function getInfo(key, changeId, value) {
    var getInfo = localStorage.getItem(key);
    if (getInfo != undefined) {
        var stats = document.getElementById(changeId).innerHTML = "<span class=\"marginHours\">" + getInfo + "</span>";
    }
};

function getWage() {
    var wage = localStorage.getItem('wage');
    var store = localStorage.getItem('store');
    var add = localStorage.getItem('add');
    var days = [parseFloat(localStorage.getItem('mondayTest')),
        parseFloat(localStorage.getItem('tuesday')),
        parseFloat(localStorage.getItem('wednesday')),
        parseFloat(localStorage.getItem('thursday')),
        parseFloat(localStorage.getItem('friday')),
        parseFloat(localStorage.getItem('saturday')),
        parseFloat(localStorage.getItem('sunday')),
        parseFloat(localStorage.getItem('monday2')),
        parseFloat(localStorage.getItem('tuesday2')),
        parseFloat(localStorage.getItem('wednesday2')),
        parseFloat(localStorage.getItem('thursday2')),
        parseFloat(localStorage.getItem('friday2')),
        parseFloat(localStorage.getItem('saturday2')),
        parseFloat(localStorage.getItem('sunday2'))
    ].reduce(calcDays, 0);

    function calcDays(previous, next) {
        return previous + next;
    }


    var calc = days * wage;
    document.getElementById('finalHours').innerHTML = days + " uur";
    var total = calc * add / 100 + calc;
    document.getElementById('finalWage').innerHTML = Math.round(total * 100) / 100 + " Euro";
    document.getElementById('finalStore').innerHTML = store;
    
}

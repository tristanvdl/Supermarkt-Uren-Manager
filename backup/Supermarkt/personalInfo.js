$(document).ready(function() {
    //Store
    getInfo('store', 'resultStore');
    setInfo('form#formStore', 'storeInput', 'store', 'resultStore');
    falseForm('#formStore');

    //Wage
    getInfo('wage', 'resultWage');
    setInfo('form#formWage', 'wageInput', 'wage', 'resultWage');
    falseForm('#formWage');

    //Add
    getInfo('add', 'resultAdd');
    setInfo('form#formAdd', 'addInput', 'add', 'resultAdd');
    falseForm('#formAdd');

    getWage('monday');

});

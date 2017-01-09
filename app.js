'use strict';

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  results: [],
  customersPerHour: function() {
    var randomNumber = Math.floor(Math.random() * 43) + 23;
    for(var i = 0; i < 15; i++){
      var cookiesSold = randomNumber * 6.3;
      this.results.push(cookiesSold);
    }
  }
};

var test = firstAndPike.customersPerHour();
console.log(firstAndPike.results);

var stores = [firstAndPike];
console.log(stores + 'stores generates');

var mylist = document.getElementById('data-list');

for (var i = 0; i < stores.length; i++){
  var customers = stores[i].resutls;
  console.log(customers + 'customers generates');
  var listEl = document.createElement('li'); //create a new element on DOM (new li tag in html, theoretically)
  listEl.textContent = customers + ' is at index' + i; //adds text to li tag
  mylist.appendChild(listEl); //adding as child to ul tag in notes.html
}

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,

};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,

};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,

};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,

};

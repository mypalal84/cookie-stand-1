'use strict';

var times = ['Stores', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

//creating Store object constructor
function Store(minCustomers, maxCustomers, avgCookies, storeName){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.storeName = storeName;
  this.results = [];
}

//creating Store objects
var firstAndPike = new Store(65, 23, 6.3, 'First and Pike');
console.log(firstAndPike + ' firstAndPike works');

var seaTac = new Store(3, 24, 1.2, 'SeaTac');
console.log(seaTac + ' seaTac works');

var seattleCenter = new Store(11, 38, 3.7, 'Seattle Center');
console.log(seattleCenter + ' seattleCenter works');

var capitolHill = new Store(20, 38, 2.3, 'Capitol Hill');
console.log(capitolHill + ' capitolHill works');

var alki = new Store(2, 16, 4.6, 'Alki');
console.log(alki + ' alki works');

//adding methods to Store objects
//generates estimated number of cookies per hour based on min, max, and avg numbers
Store.prototype.cookiesPerHour = function() {
  for(var i = 0; i < times.length - 2; i++){
    var randomNumber = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    console.log(randomNumber + ' randomNumber generated');
    var numCookies = Math.round(randomNumber * this.avgCookies);
    console.log(numCookies + ' numCookies generated');
    this.results.push(numCookies);
  }
};

//generates total number of cookies per store per day
Store.prototype.cookiesSum = function() {
  var sum = 0;
  for(var j = 1; j < this.results.length; j++) {
    sum += this.results[j];
  }
  this.results.push(sum);
  console.log(sum + ' sum generated');
};

//creating table nodes for store data (results arrays)
Store.prototype.render = function() {
  var tableStoreData = document.getElementById('data-table');
  var rowEl = document.createElement('tr');
  var headEl = document.createElement('th');
  headEl.textContent = this.storeName;
  console.log(headEl.textContent);
  rowEl.appendChild(headEl);
  for(var i = 0; i < this.results.length; i++){
    var dataEl = document.createElement('td');
    dataEl.textContent = this.results[i];
    rowEl.appendChild(dataEl);
  }
  tableStoreData.appendChild(rowEl);
};

//creating first row of hours
function timesRow(){
  var tableTimes = document.getElementById('data-table');
  for (var i = 0; i < times.length; i++){
    var listEl = document.createElement('th');
    listEl.textContent = times[i];
    console.log(listEl.textContent);
    tableTimes.appendChild(listEl);
  }
}

timesRow();

//calling object.methods
firstAndPike.cookiesPerHour();
firstAndPike.cookiesSum();
firstAndPike.render();

seaTac.cookiesPerHour();
seaTac.cookiesSum();
seaTac.render();

seattleCenter.cookiesPerHour();
seattleCenter.cookiesSum();
seattleCenter.render();

capitolHill.cookiesPerHour();
capitolHill.cookiesSum();
capitolHill.render();

alki.cookiesPerHour();
alki.cookiesSum();
alki.render();

//finding totals by hour and adding to table
var totalsByHour = [];
for (var i = 0; i < times.length - 1; i++){
  var totalEachHour = firstAndPike.results[i] + seaTac.results[i] + seattleCenter.results[i] + capitolHill.results[i] + alki.results[i];
  totalsByHour.push(totalEachHour);
}

function totalsHourly(){
  var columnTotals = document.getElementById('data-table');
  var rowEl = document.createElement('tr');
  var listEl = document.createElement('th');
  listEl.textContent = 'Total';
  rowEl.appendChild(listEl);
  for (var i = 0; i < totalsByHour.length; i++){
    var dataEl = document.createElement('td');
    dataEl.textContent = totalsByHour[i];
    rowEl.appendChild(dataEl);
  }
  columnTotals.appendChild(rowEl);
}

totalsHourly();

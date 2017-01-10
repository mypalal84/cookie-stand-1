'use strict';

var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:', 'Total:'];

//objects

function Store(minCustomers, maxCustomers, avgCookies){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.results = [];
}

var firstAndPike = new Store(65, 23, 6.3);
console.log(firstAndPike + ' firstAndPike works');

var seaTac = new Store(3, 24, 1.2);
console.log(seaTac + ' seaTac works');

var seattleCenter = new Store(11, 38, 3.7);
console.log(seattleCenter + ' seattleCenter works');

var capitolHill = new Store(20, 38, 2.3);
console.log(capitolHill + ' capitolHill works');

var alki = new Store(2, 16, 4.6);
console.log(alki + ' alki works');

Store.prototype.cookiesPerHour = function() {
  for(var i = 0; i < times.length - 1; i++){
    var randomNumber = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    console.log(randomNumber + ' randomNumber generated');
    var numCookies = Math.round(randomNumber * this.avgCookies);
    console.log(numCookies);
    this.results.push(numCookies + ' numCookies generated');
  }
};

Store.prototype.cookiesSum = function() {
  var sum = 0;
  for(var j = 0; j < this.results.length; j++) {
    sum += this.results[j];
  }
  this.results.push(sum);
  console.log(sum + ' sum generated');
};

//calling object.methods and DOM code
//FirstandPike
firstAndPike.cookiesPerHour();
firstAndPike.cookiesSum();

var mylist = document.getElementById('firstandpike');
mylist.setAttribute('class', 'cookie-list');

for (var i = 0; i < firstAndPike.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + firstAndPike.results[i];
  if (i === firstAndPike.results.length - 1){
    listEl.setAttribute('class', 'cookie-total');
  }
  mylist.appendChild(listEl);
}

//SeaTac
seaTac.cookiesPerHour();
seaTac.cookiesSum();

var mylist = document.getElementById('seatac');

for (var i = 0; i < seaTac.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + seaTac.results[i];
  mylist.appendChild(listEl);
}

//seattleCenter
seattleCenter.cookiesPerHour();
seattleCenter.cookiesSum();

var mylist = document.getElementById('seattlecenter');

for (var i = 0; i < seattleCenter.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + seattleCenter.results[i];
  mylist.appendChild(listEl);
}

//capitolHill
capitolHill.cookiesPerHour();
capitolHill.cookiesSum();

var mylist = document.getElementById('capitolhill');

for (var i = 0; i < capitolHill.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + capitolHill.results[i];
  mylist.appendChild(listEl);
}

//Alki
alki.cookiesPerHour();
alki.cookiesSum();

var mylist = document.getElementById('alki');

for (var i = 0; i < alki.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + alki.results[i];
  mylist.appendChild(listEl);
}

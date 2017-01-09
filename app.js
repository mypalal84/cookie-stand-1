'use strict';

var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

//objects
var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < 15; i++){
      var randomNumber = Math.floor(Math.random() * (65 - 23) + 23);
      console.log(randomNumber);
      var numCookies = Math.floor(randomNumber * 6.3);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  }
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < 15; i++){
      var randomNumber = Math.floor(Math.random() * (24 - 3) + 3);
      console.log(randomNumber);
      var numCookies = Math.floor(randomNumber * 1.2);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  }
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < 15; i++){
      var randomNumber = Math.floor(Math.random() * (38 - 11) + 11);
      console.log(randomNumber);
      var numCookies = Math.floor(randomNumber * 3.7);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  }
};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < 15; i++){
      var randomNumber = Math.floor(Math.random() * (38 - 20) + 20);
      console.log(randomNumber);
      var numCookies = Math.floor(randomNumber * 2.3);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  }
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < 15; i++){
      var randomNumber = Math.floor(Math.random() * (16 - 2) + 2);
      console.log(randomNumber);
      var numCookies = Math.floor(randomNumber * 4.6);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  }
};

//calling object.functions and DOM code
//FirstandPike
firstAndPike.cookiesPerHour();

var mylist = document.getElementById('firstandpike');

for (var i = 0; i < firstAndPike.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + firstAndPike.results[i];
  mylist.appendChild(listEl);
}

//SeaTac
seaTac.cookiesPerHour();

var mylist = document.getElementById('seatac');

for (var i = 0; i < seaTac.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + seaTac.results[i];
  mylist.appendChild(listEl);
}

//seattleCenter
seattleCenter.cookiesPerHour();

var mylist = document.getElementById('seattlecenter');

for (var i = 0; i < seattleCenter.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + seattleCenter.results[i];
  mylist.appendChild(listEl);
}

//capitolHill
capitolHill.cookiesPerHour();

var mylist = document.getElementById('capitolhill');

for (var i = 0; i < capitolHill.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + capitolHill.results[i];
  mylist.appendChild(listEl);
}

//Alki
alki.cookiesPerHour();

var mylist = document.getElementById('alki');

for (var i = 0; i < alki.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + alki.results[i];
  mylist.appendChild(listEl);
}

'use strict';

var distanceRange = [10, 15, 20];
var commonPriceResult = [];

var companyList = {
  "pek": 0.9,
  "business": 1,
  "best": 2
};

function addCompany(companyName, companyFactor) {
  companyList[companyName] = companyFactor;
}

addCompany('newCompany', 50);


distanceRange.forEach(function (distance) {
  var priceResult = {};

  for (var company in companyList) {
    priceResult[company] = companyList[company] * distance + " " + "rub";
  }

  commonPriceResult.push(priceResult);
});

console.log(commonPriceResult);

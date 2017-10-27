'use strict';

var arr = [1, 5, 10];
var result = [];
arr.forEach(function(distance, i) {

  var companyList = {
    "pek": 0.9,
    "business": 1,
    "best": 2
  };
  for (var company in companyList) {
    companyList[company] = companyList[company] * distance + " " + "rub"

  }

  result.push(companyList);
});
console.log(result);

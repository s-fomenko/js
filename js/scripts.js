'use strict';

function calcDistance(distance) {
    var companyList = {
    "pek": 0.9,
    "business": 1,
    "best": 2
  };
    for (var company in companyList) {
        companyList[company] = companyList[company] * distance + " " + "rub";
    }

    console.log(companyList);
}

calcDistance(10);

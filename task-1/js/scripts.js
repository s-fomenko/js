// var distance = +prompt('Укажите расстояние в километрах');
//
// function pek() {
//   var firstPrice = (distance * 0.9);
//   alert('Компания ПЭК ' + firstPrice + ' руб');
// }
//
// function dl() {
//   var secondPrice = (distance * 1);
//   alert('Компания Деловые Линии ' + secondPrice + ' руб');
// }
//
// function best() {
//   var thirdPrice = (distance * 2);
//   alert('Компания Лучшая компания ' + thirdPrice + ' руб');
// }
//
// pek();
// dl();
// best();

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

var distance = +prompt('Укажите расстояние в километрах');

function pek() {
  var firstPrice = (distance * 0.9);
  alert('Компания ПЭК ' + firstPrice + ' руб');
}

function dl() {
  var secondPrice = (distance * 1);
  alert('Компания Деловые Линии ' + secondPrice + ' руб');
}

function best() {
  var thirdPrice = (distance * 2);
  alert('Компания Лучшая компания ' + thirdPrice + ' руб');
}

pek();
dl();
best();

'use strict';

var countResult = 0;

function count(n) {
  for(var i = 0; i <= n; i++) {
    countResult += i;
  }
  console.log(countResult);
}

count(3);

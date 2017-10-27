'use strict';

var someArray = [2, 5, 10];
var sum = 0;

function changeArray(arr) {
  for( var i = 0; i < arr.length; ++i) {
    sum += someArray[i];
  }

  console.log(sum);
}

changeArray(someArray);




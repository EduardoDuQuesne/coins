/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
/*
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  
  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();
*/
var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};
function coinCounter(input) {
    coinPurse.quarters = Math.floor(input / .25);
    var newInput = input - (coinPurse.quarters * .25);
    coinPurse.dimes = Math.floor(newInput / .10);
    newInput = newInput - (coinPurse.dimes * .10);
    coinPurse.nickels = Math.floor(newInput / .05);
    newInput = newInput - (coinPurse.nickels * .05);
    coinPurse.pennies = Math.round(newInput / .01);
}
coinCounter(93.34);
console.log(coinPurse);




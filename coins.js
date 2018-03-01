const coinInput = document.getElementById('coin-input');
const button = document.getElementById('submit');
const outputDiv = document.getElementById('output');

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
    printToDom(coinPurse);

}

button.addEventListener("click", function() {
  let input = coinInput.value;
  coinCounter(input);
});

function printToDom(coins) {
  outputDiv.innerHTML = 
    `<h3>Quarters: ${coins.quarters}</h3>
    <h3>Dimes: ${coins.dimes}</h3>
    <h3>Nickels: ${coins.nickels}</h3>
    <h3>Pennies: ${coins.pennies}</h3>`;
};





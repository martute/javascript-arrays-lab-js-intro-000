var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens = [...kittens, "Ralph"];
  return kittens;
}

function destructivelyPrependKitten(Bob) {
  kittens = ["Bob", ...kittens];
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(Broom) {
  var kittens1 = [...kittens, "Broom"];
  return kittens1;
}

function prependKitten(Arnold) {
  var kittens2 = ["Arnold", ...kittens];
  return kittens2;
}

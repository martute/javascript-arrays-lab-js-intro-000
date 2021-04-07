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

function appendKitten(Hur) {
  var kittens1 = [...kittens, "Hur"];
  return kittens1;
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens = [...kittens, "Ralph"];
  return kittens;
}

function destructivelyPrependKitten(Ralph) {
  kittens = ["Ralph", ...kittens];
  return kittens;
}

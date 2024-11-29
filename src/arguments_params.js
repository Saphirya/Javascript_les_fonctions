//paramètres
function fun(param = "default") {
  if (param) {
    console.log(param.toUpperCase());
  }
}
fun("param");

//Objet arguments et utilisation de l'opérateur Rest
//version old school
function add() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  console.log(total);
}
add(1, 2, 3, 4);

//nouvelle version
function add2(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}
add2(1, 2, 3, 4);

//avec operateur
function operation(operator, ...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
  return total;
}

const total = operation("+", 1, 2, 3, 4);
console.log(total);

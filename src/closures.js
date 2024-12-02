//closures

function powerBy(power) {
  return function (number) {
    return number ** power;
  };
}

const powerBy2 = powerBy(2);

console.log(powerBy2(300));

//exemples

const a = () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
};

const tab = a();
tab[0]();
tab[1]();
tab[2]();

//resultat 3  , 3 , 3
//le var existe dans le contexte d'une fonction
//le let existe dans le bloc de code de la fonction

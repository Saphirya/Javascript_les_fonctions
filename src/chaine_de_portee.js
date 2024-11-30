//Tout dépend de l'environnement léxical
function a() {
  console.log(foo);
}

function b() {
  let foo = 1;
  a();
}

let foo = 2;
b();

function b1() {
  function a1() {
    console.log(fooo);
  }
  let fooo = 1;
  a1();
}

let fooo = 2;
b1();

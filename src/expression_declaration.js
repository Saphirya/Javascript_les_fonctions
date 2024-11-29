// declaration
function func() {
  console.log("func exec");
}

func();

//expression
const fn = function func2() {
  console.log("func2 exec");
};
console.log(fn.name);
fn();

//fonction anonyme

const fn2 = function () {
  console.log("fn2 exec");
};
fn2();

console.log(fn2.name);
console.log(fn);

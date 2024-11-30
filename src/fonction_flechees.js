//forcement anonyme//
const a = (b, c) => b + c;
console.log(a(1, 2));

//retourner un objet litteral

const b = (b, c) => ({
  b,
  c,
  total: b + c,
});
console.log(b(1, 2));

//this dans le cas d'une fonction flechees

const c = () => {
  console.log(this);
};
c();
const d = {
  foo: "bar",
};
c.call(d);

// console.log(c.name);

// const d = c.bind(null);
// d();

// const e = c.call(null);
// e();

//fonction flechees

function f(a, b) {
  return a + b;
}

const g = {
  foo: "bar",
  fn() {
    const fn2 = () => {
      console.log(this);
    };
    fn2();
  },
};

g.fn();

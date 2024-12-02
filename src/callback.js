//first class function

function fn(a, cb) {
  console.log("a:", a);
  cb(a);
}

fn("je suis a", (foo) => {
  console.log("cb: ", foo);
});

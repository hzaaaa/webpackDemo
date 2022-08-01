let g = function* () {
  let a = 1;

  let b = yield new Promise((resolve) => {
    setTimeout((_) => {
      resolve(a);
    }, 3000);
  });
  b++;
  let c = yield b;
  c++;
  return c;
};
// let it = g();
// let a = it.next();
// console.log(a);
// let b = it.next(a.value);
// console.log(b);
// let c = it.next(b.value);
// console.log(c);

// let auto = function (g) {
//   let iterator = g();
//   let obj = iterator.next();
//   console.log(obj.value);
//   let i = 0;
//   while (!obj.done) {
//     i++;
//     console.log(i);
//     obj = iterator.next(i);
//     console.log(obj.value);
//   }
// };
// auto(g);
let auto = function (g) {
  let iterator = g();
  let f = function (obj) {
    let p = Promise.resolve(obj.value);
    p.then((res) => {
      console.log(res);
      let obj1 = iterator.next(res);
      if (!obj1.done) {
        f(obj1);
      }
    });
  };
  // let obj = iterator.next();

  f(iterator.next());
};
auto(g);
console.log('code end');

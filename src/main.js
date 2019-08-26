import test from './test';

(function() {
  const arrowFunc = string => string;

  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnedTarget = {...target, ...source};

  // let happy = 'test';

  console.log(returnedTarget);

  console.log([1, 2, 3].map(n => n + 1));

  console.log(arrowFunc('working idea'));
  test();
})();

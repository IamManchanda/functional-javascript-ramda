/* Ramda.js */

console.log(R);

var dec = R.subtract(R.__, 1);
var decFrom10 = dec(10);
var decFrom20 = dec(20);
console.log({ decFrom10, decFrom20 });
/* {decFrom10: 9, decFrom20: 19} */

var inc = R.add(1);
var incBy10 = inc(10);
var incBy20 = inc(20);
console.log({ incBy10, incBy20 });
/* {incBy10: 11, incBy20: 21} */

var mapNumbers = R.map(R.__, [1, 2, 3, 4]);
var indexPlusValue = R.addIndex(mapNumbers)(R.add);
console.log({ indexPlusValue });
/* {applyAddIndex: [1, 3, 5, 7]} */

var adjustIndex1 = R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);
var adjustIndexNeg1 = R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);
console.log({ adjustIndex1, adjustIndexNeg1 });
/* {adjustIndex1: ["a", "B", "c", "d"], adjustIndexNeg1: ["a", "b", "c", "D"]} */

var checkAllEqual = R.all(x => x = 10)([10, 10, 10, 10, 10]);
console.log({ checkAllEqual });
/* {checkAllEqual: true} */

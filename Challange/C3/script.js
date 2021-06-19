let arrayData = [
  "orchid",
  "switch",
  "inhaler",
  "spliter",
  "charger",
  "tape measure",
];
console.log(arrayData);
// remove last element
arrayData.pop();
console.log(arrayData);
// move last to first
arrayData.unshift(arrayData.pop());
console.log(arrayData);
arrayData.sort();
console.log(arrayData);
const foundItem = arrayData.find((item) => item === "charger");
console.log(foundItem);

arrayData.splice(arrayData.indexOf("spliter"), 1);
console.log(`Array with spliter removed:`, arrayData);

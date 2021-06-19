/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// Find an element and add two classes
var class_list = document.querySelector(".page-header__heading").classList;

class_list.add("to_delete");
class_list.add("to_add");
console.log(class_list);
// remove one of the new classes
class_list.remove("to_delete");
console.log(class_list);

// Add a new attribute to an element (data-name)
document.querySelector(".backpack__color").setAttribute("data-color", "gray");
// requent value of attribute
console.log(
  document.querySelector(".backpack__color").getAttribute("data-color")
);

// change value of attribute
document.querySelector(".backpack__color").setAttribute("data-color", "blue");
console.log(
  document.querySelector(".backpack__color").getAttribute("data-color")
);

var color = document
  .querySelector(".backpack__color")
  .getAttribute("data-color");
// add some inline CSS to an element
document.querySelector(".backpack__color").style.color = color;
//Query style property of a element
console.log(
  "current color is: " + document.querySelector(".backpack__color").style.color
);

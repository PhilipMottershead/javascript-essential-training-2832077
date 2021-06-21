/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addH1() {
  let h1 = document.createElement("h1");
  h1.innerText = "test";
  document.body.appendChild(h1);
}
addH1();

const addClass = function add_class(class_name) {
  document.querySelector("h1").classList.add(class_name);
};
addClass("headline");

const addStyle = (color) => {
  document.querySelector("h1").style.backgroundColor = color;
};

addStyle("blue");

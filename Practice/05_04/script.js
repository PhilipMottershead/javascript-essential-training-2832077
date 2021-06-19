/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
document
  .querySelectorAll("li")
  .forEach((item) => (item.style.backgroundColor = "blue"));
document
  .querySelectorAll("#pack02 li")
  .forEach((item) => (item.style.backgroundColor = "green"));
document
  .querySelectorAll("#pack02 li.backpack__age")
  .forEach((item) => (item.style.backgroundColor = "yellow"));

var toggle = document.querySelector("#pack02 button.lid-toggle");
toggle.style.backgroundColor = "pink";

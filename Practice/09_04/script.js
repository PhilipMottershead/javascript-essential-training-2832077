/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const container = document.querySelector(".container");

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  // Remove outline when cell is exited
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "blue";
  });
});

container.addEventListener(
  "mouseenter",
  (event) => {
    container.style.backgroundColor = "black";
    console.log(event);
  },
  false
);

document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }
});

container.addEventListener(
  "mouseleave",
  (event) => {
    container.style.backgroundColor = "white";
    console.log(event);
  },
  false
);

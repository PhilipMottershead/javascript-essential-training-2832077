/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const lamp = {
  color: "purple",
  turnedOn: true,
  powered: true,
  brightness: 60,
};
console.log("The lamp object", lamp);
const desk = {
  size: {
    length: 120,
    height: 70,
    width: 50,
  },
  item: lamp,
};
console.log("The desk object", desk);

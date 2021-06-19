/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Jumper {
  constructor(brand, color, size, worn) {
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.worn = worn;
  }
  wear(wear) {
    this.worn = wear;
  }
}
export default Jumper;

const jumper1 = new Jumper("ss", "red", "m", false);
const jumper2 = new Jumper("ss", "red", "m", false);
console.log(jumper1);
console.log(jumper2.brand);

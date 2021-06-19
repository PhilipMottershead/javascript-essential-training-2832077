/**
 * Create a Backpack object.
 */
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function () {
    this.lidOpen = this.lidOpen == true ? false : true;
    return this.lidOpen;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack.newStrapLength);
console.log("The pocketNum value:", backpack.pocketNum);
backpack.newStrapLength(12, 13);
console.log("The backpack object:", backpack.newStrapLength);

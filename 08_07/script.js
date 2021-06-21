/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, curencySymbol, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix) {
    console.log(`
    Sum before tip: ${curencySymbol}${sum}
    Tip percentage: ${percentage}%
    Tip:            ${curencySymbol}${tip.toFixed(2)}
    Total:          ${curencySymbol}${total.toFixed(2)}
  `);
  } else {
    console.log(`
    Sum before tip: ${sum}${curencySymbol}
    Tip percentage: ${percentage}%
    Tip:            ${tip.toFixed(2)}${curencySymbol}
    Total:          ${total.toFixed(2)}${curencySymbol}
  `);
  }
};

tipCalculator(29.95, 19, "$", false);
tipCalculator(40, 19, "£", true);

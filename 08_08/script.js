/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */
const formatter = (number, locale, currency) => {
  let formaterValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(number);

  return formaterValue;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(sum, locale, currency)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(tip.toFixed(2), locale, currency)}
      Total:          ${formatter(total.toFixed(2), locale, currency)}
    `);
};

tipCalculator(29.95, 18, "de-DE", "EUR");

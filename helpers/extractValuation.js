/**
 * Extracts the number following the word 'valuation' in a given string.
 * @param {string} text - The input string to search.
 * @returns {number|null} - The extracted number or null if not found.
 */
function extractValuation(text) {
  // Create a regular expression to match the word 'valuation' (case-insensitive)
  // followed by a colon and a number (with optional decimal part)
  const regex = /valuation:\s*([\d.]+)/i;

  // Execute the regular expression on the input text
  const match = text.match(regex);

  // If a match is found, return the captured number as a float
  // Otherwise, return null
  return match ? parseFloat(match[1]) : null;
}

// Example usage
// const exampleString =
//   "blah blah blah blah blah Valuation: 8.765244 blah blah blah";
// const valuation = extractValuation(exampleString);
// console.log(`Extracted valuation: ${valuation}`); // Output: Extracted valuation: 8.765244

// Export the function for use in other modules
module.exports = extractValuation;

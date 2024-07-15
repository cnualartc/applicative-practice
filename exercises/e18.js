/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const discoveryCounts = data.asteroids.reduce((counts, asteroid) => {
    counts[asteroid.discoveryYear] = (counts[asteroid.discoveryYear] || 0) + 1;
    return counts;
  }, {});

  let greatestYear = null;
  let greatestCount = 0;
  for (const year in discoveryCounts) {
    if (discoveryCounts[year] > greatestCount) {
      greatestCount = discoveryCounts[year];
      greatestYear = parseInt(year);
    }
  }

  return greatestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

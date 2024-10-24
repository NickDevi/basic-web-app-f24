export default function QueryProcessor(query: string): string {
  // Check for arithmetic "plus" operations
  if (query.toLowerCase().includes("plus")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[4]);
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 + num2).toString();
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[4]);
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 - num2).toString();
    }
  }

  // Check for arithmetic "multiplied by" operations
  if (query.toLowerCase().includes("multiplied by")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[5]);
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 * num2).toString();
    }
  }

  // Check for largest number queries
  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g)?.map(Number); // Extract numbers from the query
    if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers);
      return largest.toString();
    }
  }

  // Check for square and cube numbers
  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number); // Extract numbers from the query
    if (numbers && numbers.length > 0) {
      const result = numbers.filter(num => isSquare(num) && isCube(num));
      if (result.length > 0) {
        return result.join(", ");
      } else {
        return "No numbers found that are both squares and cubes.";
      }
    }
  }

  // Handle predefined queries like Shakespeare, Andrew ID, or name
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    // Add your Andrew ID below
    return "ndevidze";
  }

  if (query.toLowerCase().includes("name")) {
    return "ndevidze";
  }

  return "";

  // Helper function to check if a number is a perfect square
  function isSquare(num: number): boolean {
    return Math.sqrt(num) % 1 === 0;
  }

  // Helper function to check if a number is a perfect cube
  function isCube(num: number): boolean {
    return Math.cbrt(num) % 1 === 0;
  }
}

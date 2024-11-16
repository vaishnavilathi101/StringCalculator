function add(inputString) {
  if (typeof inputString !== "string")
    throw new Error(`Please provide string input`);
  if (!inputString) return 0;

  let delimiter = /,|\n/;
  if (inputString.startsWith("//")) {
    const parts = inputString.split("\n", 2);
    delimiter = new RegExp(parts[0].slice(2));

    inputString = parts[1];
  }
  const numbers = inputString.split(delimiter).map(Number);
  const negativesNumArray = numbers.filter((num) => num < 0);

  if (negativesNumArray.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativesNumArray.join(", ")}`
    );
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("//:\n1:2"));
console.log(add("1,2"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));

try {
  console.log(add("1,-2,3,-4"));
} catch (e) {
  console.error(e.message);
}

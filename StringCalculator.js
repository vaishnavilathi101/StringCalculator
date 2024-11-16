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

  return numbers.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("//:\n1:2"));
console.log(add("1,2"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));
console.log(add(""));
try {
  console.log(add([]));
} catch (e) {
  console.error(e.message);
}

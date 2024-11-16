function add(inputString) {
  if (typeof inputString !== "string")
    throw new Error(`Please provide string input`);
  if (!inputString) return 0;
}

// Test cases
console.log(add(""));
try {
  console.log(add([]));
} catch (e) {
  console.error(e.message);
}

function add(inputString) {
  if (typeof inputString !== "string")
    throw new Error(`Please provide string input`);
}

// Test cases

try {
  console.log(add([]));
} catch (e) {
  console.error(e.message);
}

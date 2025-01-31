function printNumbers(n: number): void {
  if (n < 1) {
    console.log('Input must be a positive integer.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // Handles the input gracefully
printNumbers(-1); // Handles the input gracefully
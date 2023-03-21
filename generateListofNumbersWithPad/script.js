const fs = require('fs');
const combinationsVariations = 3;
const base = 10;
const combinations = power(base, combinationsVariations);

for (let i = 1; i <= combinations; i++) {
  const output = formatNumber(i, combinationsVariations) + '\n';
  fs.appendFile('output.txt', output, (err) => {
    if (err) throw err;
    console.log('Data appended to file!');
  });
}

function formatNumber(num, length) {
    return num.toString().padStart(length, '0');
}

function power(base, num) {
    let result = base;
    for (let i = 1; i < num; i++) {
      result *= base;
    }
    return result;
}
function generateSequence(num) {
  var sequence = [];
  for (var i = 1; i <= num; i++) {
    sequence.push(0);
  }
  return sequence;
}

var mySequence = generateSequence(10);

console.log(mySequence); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

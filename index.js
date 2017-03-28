function matrixSpiral(matrix) {
  var result = matrix[0];
  var length = matrix.length;
  var l = length - 1;
  var n = (length + 1) / 2;
  var x = 0;
  var y = length - 1;
  var delta = 1;
  var yChanging = false;
  var directionChanged = 1;
  var counter = 0;
  var rounds = 0;
  for (i = 1; i < length * length - length; i++) {
    if (yChanging) {
      y = y + delta;
    } else {
      x = x + delta;
    }
    counter = counter + 1;
    if (rounds === 2) {
      rounds = 0;
      l = l - 1;
    }
    if (counter === l) {
      counter = 0;
      directionChanged = directionChanged + 1;
      rounds = rounds + 1;
      yChanging = !yChanging;
      if (directionChanged === 2) {
        delta = -delta;
        directionChanged = 0;
      }
    }
    result.push(matrix[x][y]);
  }
  var lastElement = matrix[n - 1][n - 1];
  result.push(lastElement);
  return result.reverse().join(' ');
}

module.exports = matrixSpiral;

const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
];

const whereIsWaldo = (matrix) => {
  let string = "";
  for (let x = 0; x <= matrix.length - 1; x++) {
    for (let y = 0; y <= matrix[x].length - 1; y++) {
      string = matrix[x][0];
      if (string === matrix[x][y]) {
        continue;
      }
      else {
        string = matrix[x][y];
        console.log([x + 1, y + 1]);
        return [x + 1, y + 1];
      }
    }
  }
};

whereIsWaldo(example);


const medianNumber = 6;

let mark = "";
let space = "";
let result = "";
let x = medianNumber;


for (let i = 0; i < medianNumber; i++) {
  for (let j = medianNumber; j > 0; j--) {
    space += " ";
  }
  mark += "##";

  result = space.slice(0, x) + mark;
  x--;
  console.log(result);
}

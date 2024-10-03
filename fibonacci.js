function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let curr = arr[i - 1] + arr[i - 2];

    if (i === 0) {
      curr = 0;
    }
    if (i === 1) {
      curr = 1;
    }

    arr.push(curr);
  }
  console.log(arr);
}

function recFib(num) {
  console.log("This was printed recursively");

  if (num === 2) {
    return [0, 1];
  }
  arr = recFib(num - 1);
  arr.push(arr.at(-2) + arr.at(-1));
  console.log(arr);
  return arr;
}

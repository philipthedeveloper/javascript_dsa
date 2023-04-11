function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return -1;
}

let list = [1, 3, 4, 6, 7, 8, 9, 11, 14, 17, 18, 21];
console.log(binarySearch(list, 15));

function recursiveBinarySearch(list, target) {
  if (list.length == 0) return false;
  let midpoint = Math.floor(list.length / 2);
  if (list[midpoint] === target) {
    return true;
  } else if (list[midpoint] < target) {
    return recursiveBinarySearch(list.slice(midpoint + 1), target);
  } else {
    return recursiveBinarySearch(list.slice(0, midpoint), target);
  }
}

let list = [1, 3, 4, 6, 7, 8, 9, 11, 14, 17, 18, 21];
console.log(recursiveBinarySearch(list, 14));

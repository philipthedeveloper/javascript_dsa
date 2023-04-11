function linearSearch(list, target) {
  // Returns the index of the target if found, else returns -1
  // Takes a runtime of O(n)
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return -1;
}

let list = [2, 34, 5, 6, 8, 19, 3, 4, 1];
console.log(linearSearch(list, 1));

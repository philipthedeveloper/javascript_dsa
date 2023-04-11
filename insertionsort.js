function insertionSort(list) {
  if (list.length <= 0) return list;
  for (let i = 1; i < list.length; i++) {
    let temp = list[i];
    let j = i - 1;
    for (; list[j] > temp && j > -1; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = temp;
  }
  return list;
}

let list = [6, 2, 5, 3, 4, 1];
let result = insertionSort(list);
console.log(result);

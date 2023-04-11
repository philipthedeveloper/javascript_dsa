function bubbleSort(list) {
  for (let i = list.length - 1; i > 0; i--) {
    console.log(`i is ${i}`);
    for (let j = 0; j < i; j++) {
      console.log(`j is ${j}`);
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}

let list = [6, 2, 5, 3, 4, 1];
let result = bubbleSort(list);
console.log(result);

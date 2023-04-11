// function selectionSort(list) {
//   if (list.length <= 1) return list;
//   let sorted = [];
//   while (list.length > 0) {
//     let min = list[0];
//     for (let j = 1; j < list.length; j++) {
//       if (list[j] < min) {
//         min = list[j];
//       }
//     }
//     sorted.push(min);
//     list = list.filter((item) => item !== min);
//   }
//   return sorted;
// }

function selectionSort(list) {
  if (list.length <= 1) return list;
  let min;
  for (let i = 0; i < list.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) min = j;
    }
    if (i !== min) {
      let temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  }
  return list;
}

let list = [6, 2, 3, 7, 5, 3, 4, 1];
let result = selectionSort(list);
console.log(result);

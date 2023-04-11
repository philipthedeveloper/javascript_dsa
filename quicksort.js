function quickSort(list) {
  if (list.length <= 1) return list;
  let pivot = list[0];
  let less_list = [];
  let greter_list = [];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      less_list.push(list[i]);
    } else {
      greter_list.push(list[i]);
    }
  }

  return [...quickSort(less_list), pivot, ...quickSort(greter_list)];
}

console.log(quickSort([6, 2, 5, 9, 3, 4, 1, 9, 7, 14, 11, 15, 10]));

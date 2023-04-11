function mergeSort(list) {
  if (list.length <= 1) return list;

  let [left, right] = split(list);
  let left_half = mergeSort(left);
  let right_half = mergeSort(right);

  return merge(left_half, right_half);
}

function split(list) {
  let midpoint = Math.floor(list.length / 2);

  let left = list.slice(0, midpoint);
  let right = list.slice(midpoint);

  return [left, right];
}

function merge(left, right) {
  let sorted = [];
  let left_index = 0;
  let right_index = 0;

  while (left_index < left.length && right_index < right.length) {
    if (left[left_index] < right[right_index]) {
      sorted.push(left[left_index]);
      left_index++;
    } else {
      sorted.push(right[right_index]);
      right_index++;
    }
  }

  while (left_index < left.length) {
    sorted.push(left[left_index]);
    left_index++;
  }

  while (right_index < right.length) {
    sorted.push(right[right_index]);
    right_index++;
  }

  return sorted;
}

// console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));
// console.log(split([1, 4]));
console.log(mergeSort([6, 2, 5, 3, 4, 1]));

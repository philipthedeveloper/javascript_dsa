class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(value) {
    // const newNode = new Node(value);
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  add(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    return this;
  }

  search(value) {
    if (!this.head) return null;
    let current = this.head;

    while (current) {
      if (current.value === value) return current;
      else current = current.nextNode;
    }
    return null;
  }

  insert(value, index) {
    if (index === 0) return this.add(value);
    if (index < 0 || index > this.size()) return null;
    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let position = 0;

    while (position < index) {
      previous = current;
      current = current.nextNode;
      position++;
    }
    newNode.nextNode = current;
    previous.nextNode = newNode;
    return this;
  }

  remove(value) {
    let current = this.head;
    let prev = null;
    let found = false;

    while (current && !found) {
      if (current.value === value && current === this.head) {
        found = true;
        this.head = current.nextNode;
        current.nextNode = null;
        return current;
      } else if (current.value === value && current.nextNode === null) {
        found = true;
        prev.nextNode = null;
        return current;
      } else if (current.value === value) {
        found = true;
        prev.nextNode = current.nextNode;
        current.nextNode = null;
        return current;
      } else {
        prev = current;
        current = current.nextNode;
      }
    }
    return null;
  }

  node_at_index(index) {
    if (index < 0) return null;
    let current = this.head;
    let position = 0;
    while (position < index && current) {
      current = current.nextNode;
      position++;
    }
    return current;
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.nextNode;
      count++;
    }

    return count;
  }
}

// let myLinkedList = new LinkedList(4);
// myLinkedList.add(9);
// myLinkedList.add(15);
// console.log(myLinkedList.insert(29, 3));
// // console.log(myLinkedList.search(4));
// // console.log(myLinkedList.isEmpty());
// // console.log(myLinkedList);
// // console.log(myLinkedList.remove(29));
// // console.log(myLinkedList.remove(15));
// console.log(myLinkedList);

function linkedListMergeSort(linkedlist) {
  if (linkedlist.size() <= 1) return linkedlist;
  if (linkedlist.head === null) return linkedlist;
  let [left, right] = split(linkedlist);
  let left_half = linkedListMergeSort(left);
  let right_half = linkedListMergeSort(right);

  return merge(left_half, right_half);
}

function split(linkedlist) {
  let mid = Math.floor(linkedlist.size() / 2);
  let midNode = linkedlist.node_at_index(mid - 1);

  let left_half = linkedlist;
  let right_half = new LinkedList();
  right_half.head = midNode.nextNode;
  midNode.nextNode = null;
  return [left_half, right_half];
}

function merge(left, right) {
  let sorted = new LinkedList();
  sorted.add(0);

  let current = sorted.head;

  let left_head = left.head;
  let right_head = right.head;

  while (left_head && right_head) {
    let left_data = left_head.value;
    let right_data = right_head.value;
    if (left_data < right_data) {
      current.nextNode = left_head;
      left_head = left_head.nextNode;
    } else {
      current.nextNode = right_head;
      right_head = right_head.nextNode;
    }
    current = current.nextNode;
  }

  while (left_head) {
    current.nextNode = left_head;
    left_head = left_head.nextNode;
    current = current.nextNode;
  }

  while (right_head) {
    current.nextNode = right_head;
    right_head = right_head.nextNode;
    current = current.nextNode;
  }

  let fake_head = sorted.head.nextNode;
  sorted.head = fake_head;

  return sorted;
}

let myLinkedList = new LinkedList();
myLinkedList.add(4);
myLinkedList.add(9);
myLinkedList.add(15);
myLinkedList.insert(29, 3);

let sorted = linkedListMergeSort(myLinkedList);
console.log(sorted.node_at_index(3));
/* // function mergeSort(list) {
//   if (list.length <= 1) return list;

//   midpoint = Math.floor(list.length / 2);
//   let left = list.slice(0, midpoint);
//   let right = list.slice(midpoint);

//   let left_half = mergeSort(left);
//   let right_half = mergeSort(right);

//   return merge(left_half, right_half);
// }

// function merge(left, right) {
//   let l = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       l.push(left[i]);
//       i++;
//     } else {
//       l.push(right[j]);
//       j++;
//     }
//   }

//   while (i < left.length) {
//     l.push(left[i]);
//     i++;
//   }

//   while (j < right.length) {
//     l.push(right[j]);
//     j++;
//   }

//   return l;
// }

// let list = [90, 21, 41, 9, 1, 14, 23, 17, 10, 31];
// console.log(mergeSort(list)); */

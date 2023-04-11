/*class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class DoubleNode extends Node {
  constructor(data) {
    super(data);
    this.prevNode = null; 
    this.nextNode = null;
  }
}


// const nodeOne = new Node(5);
// const nodeTwo = new Node(15);
// print(nodeOne);
// print(nodeTwo);
// nodeOne.nextNode = nodeTwo;
// print(nodeOne.nextNode);
// const doubleNodeOne = new DoubleNode(14);
// const doubleNodeTwo = new DoubleNode(20);
// const doubleNodeThree = new DoubleNode(25);
// print(doubleNodeOne);
// doubleNodeOne.nextNode = doubleNodeTwo;
// doubleNodeTwo.prevNode = doubleNodeOne;
// doubleNodeTwo.nextNode = doubleNodeThree;
// doubleNodeThree.prevNode = doubleNodeTwo;
// print(doubleNodeOne);
// print(doubleNodeTwo);
// print(doubleNodeThree);
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let prev = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (current.next) {
        prev = current;
        current = current.next;
      }
      this.tail = prev;
      prev.next = null;
    }
    this.length--;
    return current;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return null;
    let current = this.head;
    this.head = current.next;
    if (this.length === 1) {
      this.tail = null;
    } else {
      current.next = null;
    }
    // if (this.length === 0) {
    //   this.tail = this.head;
    // }
    this.length--;
    return current;
  }
  get(index) {
    // if (index === 0) {
    //   return this.head;
    // }
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let position = 0;

    while (position < index) {
      current = current.next;
      position++;
    }
    return current;
  }
  set(value, index) {
    let current = this.get(index);
    if (current) {
      current.value = value;
      return true;
    }
    return false;
  }
  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const current = prev.next;
    prev.next = current.next;
    current.next = null;
    this.length--;
    return current;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next = current.next;
    while (next) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

export const print = (val) => {
  console.log(val);
};

let myLinkedList = new LinkedList(5);
myLinkedList.push(10);
myLinkedList.push(14);
myLinkedList.unshift(26);
// myLinkedList.unshift(6);
// let result = myLinkedList.pop();
// resultTwo = myLinkedList.pop();
// resultThree = myLinkedList.pop();
// resultFour = myLinkedList.pop();
// resultFive = myLinkedList.pop();
// myLinkedList.unshift(14);
// myLinkedList.unshift(1);
// print(result);
// print(resultTwo);
// print(resultThree);
print(myLinkedList.shift());
// print(myLinkedList.shift());
// print(myLinkedList.shift());
// print(myLinkedList.shift());
// print(myLinkedList.shift());
// print(myLinkedList.shift());
// print(myLinkedList.get(0));
// print(myLinkedList.set(18, 0));
// print(myLinkedList.insert(31, 1));
// print(myLinkedList.remove(-1));

print(myLinkedList);
// print(myLinkedList.reverse());

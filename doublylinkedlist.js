// import { print } from "./linkedlist.js";

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) return null;
//     let current = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = current.prev;
//       this.tail.next = null;
//       current.prev = null;
//     }
//     this.length--;
//     return current;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (this.length === 0) return null;
//     let current = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = current.next;
//       this.head.prev = null;
//       current.next = null;
//     }
//     this.length--;
//     return current;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let current = this.head;
//     let position = 0;
//     if (index < this.length / 2) {
//       while (position < index) {
//         current = current.next;
//         position++;
//       }
//     } else {
//       current = this.tail;
//       position = this.length - 1;
//       while (position > index) {
//         current = current.prev;
//         position--;
//       }
//     }
//     return current;
//   }

//   set(value, index) {
//     let current = this.get(index);
//     if (current) {
//       current.value = value;
//       return true;
//     }
//     return false;
//   }

//   insert(value, index) {
//     if (index === 0) return this.unshift(value);
//     if (index === this.length) return this.push(value);
//     if (index < 0 || index > this.length) return false;

//     const newNode = new Node(value);
//     let before = this.get(index - 1);
//     let after = before.next;
//     before.next = newNode;
//     newNode.prev = before;
//     newNode.next = after;
//     after.prev = newNode;
//     this.length++;
//     return true;
//   }

//   remove(index) {
//     if (index < 0 || index >= this.length) return null;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();

//     const current = this.get(index);
//     const prev = current.prev;
//     const after = current.next;
//     prev.next = after;
//     after.prev = prev;
//     current.next = null;
//     current.prev = null;
//     this.length--;
//     return current;
//   }
// }

// let MyDoublyLinkedList = new DoublyLinkedList(14);
// MyDoublyLinkedList.push(6);
// MyDoublyLinkedList.push(9);
// // MyDoublyLinkedList.pop();
// MyDoublyLinkedList.unshift(7);
// MyDoublyLinkedList.unshift(71);
// // MyDoublyLinkedList.shift();
// // MyDoublyLinkedList.shift();
// // print(MyDoublyLinkedList.get(5));
// // MyDoublyLinkedList.set(27, 2);
// // print(MyDoublyLinkedList.get(2));
// // print(MyDoublyLinkedList);
// // print(MyDoublyLinkedList.insert(40, 2));
// // print(MyDoublyLinkedList.get(2));
// // print(MyDoublyLinkedList.remove(0));
// // print(MyDoublyLinkedList.remove(0));
// // print(MyDoublyLinkedList.remove(0));
// // print(MyDoublyLinkedList.remove(0));
// print(MyDoublyLinkedList);

// function stringToHash(str) {
//   let hash = 0;
//   if (str.length === 0) {
//     return hash;
//   }
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i);
//     hash = (hash << 5) - hash + char;
//     hash &= hash; // Convert to 32bit integer
//   }
//   return Math.abs(hash);
// }

// console.log(stringToHash("aanila"));

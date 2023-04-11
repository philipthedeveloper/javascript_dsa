class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * USES THE FIFO(First In First Out) Principle
 * => The first item in the queue is the first item to be removed from the queue
 * => When enqueuing to the queue it is done from the last item(just like pushing from the tail of a linkedlist 🔴➡️🔴➡️🔴➡️)
 * => When dequeuing from the queue it is done from the first item(just like shifting from the head of a linkedlist)
 * First => 🔴➡️🔴➡️ Last => 🔴 ➡️
 */
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return null;
    let current = this.first;
    if (this.last === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      current.next = null;
    }
    this.length--;
    return current;
  }
}

const myQueue = new Queue(11);
myQueue.enqueue(9);
myQueue.enqueue(17);
console.log(myQueue.dequeue());
console.log(myQueue);

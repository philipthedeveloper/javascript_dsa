class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * USES THE LIFO(Last In First Out) PRINCIPLE
 * => The last item in the stack is the first item to be removed from the stack
 * => When pushing to the stack it is done from the top(just like unshifting from the head for linkedlist 🔴➡️🔴➡️🔴➡️)
 * => When popping from the stack it is done from the top(just like shifting from the head for linkedlist)
 * Top => 🔴(Last in)
 *        ⬇️
 *        🔴
 *        ⬇️
 *        🔴
 *        ⬇️
 */
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    let current = this.top;
    this.top = current.next;
    current.next = null;

    this.length--;
    return current;
  }
}

const MyStack = new Stack(14);
// console.log(MyStack);
MyStack.push(9);
MyStack.push(11);
console.log(MyStack.pop());
console.log(MyStack.pop());
console.log(MyStack);
// console.log(MyStack.top.next);

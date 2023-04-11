class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    /**
     * STEPS REQUIRED
     * */
    //  create new node
    const newNode = new Node(value);
    //  if the root node is null
    if (!this.root) {
      // insert the new node at the root and return
      this.root = newNode;
      return this;
    }
    // start from root => Mame it current
    let current = this.root;
    //  * While loop
    while (true) {
      // *    if they are equal return null
      if (current.value === newNode.value) return null;
      // *    if the new node is less than the root node
      if (newNode.value < current.value) {
        // Check if the next item by the left is null
        if (current.left === null) {
          // *      insert the element there and return
          current.left = newNode;
          return this;
        }
        // *      move to the next node by the left
        current = current.left;
      } else if (newNode.value > current.value) {
        //*    else if the new node is greater than the root node
        // Check if the next item by right is null
        if (current.right === null) {
          // *      insert the element there and return
          current.right = newNode;
          return this;
        }
        // *      move to the next node by the right
        current = current.right;
      }
    }
  }

  contains(value) {
    // check if the BST is empty
    if (!this.root) return false;
    // assign the root node to a current variable
    let current = this.root;
    // start a while loop that terminates if the result is found or the current node is null
    while (current) {
      // if the value is equal to the current value
      if (current.value === value) {
        // return true
        return true;
      } else if (value < current.value) {
        // if the value is less than the current value
        // move to the next value by the left
        current = current.left;
      } else {
        // the value is greater than the current value
        // move to the next value by the right
        current = current.right;
      }
    }
    return false;
  }
}

let myTree = new BST();
myTree.insert(45);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);

myTree.insert(52);
myTree.insert(82);
console.log(myTree);
// console.log(myTree.contains(76));
// console.log(myTree.contains(20));

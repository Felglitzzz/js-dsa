class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// first in, first out
// implemented with Linked List with tail
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newItem = new ListNode(value);
    if (!this.head) {
      this.head = newItem;
      this.tail = newItem
    } else {
      this.tail.next = newItem;
      this.tail = newItem
    }
    this.length++
    return this
  }

  // not needed for linkedlist with tail implementation
  // getNodeByIndex(index) {
  //   let currentNode = this.head;
  //   let counter = 0;
  //   while(counter !== index) {
  //     currentNode = currentNode.next;
  //     counter++
  //   }
  //   return currentNode;
  // }

  // not needed for linkedlist with tail implementation
  // getLastItem() {
  //   let currentNode = this.head;
  //   while(!currentNode.next) {
  //     currentNode = currentNode.next;
  //   }
  //   return currentNode;
  // }

  // not needed for linkedlist with tail implementation
  // enqueueAgain(value) {
  //   const newItem = new ListNode(value);
  //   if (!this.head) {
  //     this.head = newItem;
  //     this.tail = newItem
  //   } else {
  //     const lastItem = this.getNodeByIndex(this.length-1);
  //     lastItem.next = newItem;
  //   }
  //   this.length++
  //   return this
  // }

  dequeue() {
    if (!this.head) return 'Bad Input';
    // const unwantedNode = this.head; // uncomment if you want to return unwantedNode
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return this;
  }

  peek() {
    return this.head;
  }

  printList() {
    let currentNode = this.head;
    const listArray = [];
    while(currentNode) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }
}

const myQueue = new Queue();

console.log('1', myQueue.enqueue(1))
console.log('2', myQueue.enqueue(2))
console.log('3', myQueue.enqueue(3))
console.log('4', myQueue.enqueue(4))
console.log('5', myQueue.enqueue(5))
console.log('-->>', myQueue.printList())
console.log('-->>', myQueue.dequeue())
console.log('-->>', myQueue.dequeue())
console.log('-->>', myQueue.printList())
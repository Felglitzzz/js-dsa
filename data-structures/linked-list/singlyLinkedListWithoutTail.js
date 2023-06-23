// a singly linkedlist is a data structure where its members or nodes have an location in memory for the value and a pointer in memory for the next node in the list
// 2 => 3 => 4 =>

const ListNode = require('./shared');

class SinglyLinkedListWithoutTail {
  head;
  length;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getNodeByIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getNodeByIndex(this.length-1);
      lastNode.next = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    // 4 => 1 => 2 => 3
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insertAt(index, value) {
    // 1 => 2 => 3 => 4
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const newNode = new ListNode(value);
    const previousNode = this.getNodeByIndex(index-1);
    // const currentNode = this.getNodeByIndex(index);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return this;
  }

  deleteAt(index) {  
  }

  printList(){
    let currentNode = this.head;
    const listArray = []
    while(currentNode) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }
}

const myLL = new SinglyLinkedListWithoutTail();
myLL.prepend(1);
myLL.deleteAt(0);
myLL.prepend(2);
myLL.prepend(3);
myLL.append(5);
myLL.insertAt(1,9)
console.log(K=JSON.stringify(myLL, null, 2))
// myLL.insertAt(0,5);
console.log('myLL.printList --->>', myLL.printList());

// a singly linkedlist is a data structure where its members or nodes have an location in memory for the value and a pointer in memory for the next node in the list
// 2 => 3 => 4 =>
const ListNode = require('./shared');

class SinglyLinkedListWithTail {
  head;
  tail;
  length;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    // create new node
    const newNode = new ListNode(value)
    if (!this.head) { // if no node = assign
      this.head = newNode; // head points to newNode in memory
      this.tail = this.head; // tail points to the exact newNode that head points to in memory
    } else {
      this.tail.next = newNode; // updates the property next in the node value (that is an object) in memory. As such, all other references to the value in memory will be updated
      this.tail = newNode // updates the reference of the variable to another value in memory (the new node)
    }
    this.length++
    return this;
  }


  prepend(value) {
    // 3 => 2 => 1
    // head is 3 => 2 => 1
    // tail is 1 => null
    // action: prepend 4
    // assign head to next of new node to become 4 => <current-head>, tail still retain its space in memory
    // new node resolves to 4 => 3 => 2 => 1
    // assign new node as the head. head becomes 4 => 3 => 2 => 1 and still is 1 => null
    const newNode = new ListNode(value)
    if (!this.head) { // for the first prepend.
      this.head = newNode; // head points to newNode in memory
      this.tail = this.head; // tail points to the exact newNode that head points to in memory
    } else {
      newNode.next = this.head; // keep a reference to the current head in the next of the new node
      this.head = newNode; // assign the updated new node as the head. tail still remains the same from the first prepend
    }
    this.length++
    return this;
  }

  getNodeByIndex(index) {
    // traverse through the linked list by having an internal counter state
    // get the next node if the counter state is not equal to the passed index
    // it stops when counter is equal to index passed and by that time, we can return the currentNode updates from the previous iteration
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  insertAt(index, value) {
    // 3 => 2 => 1 => 4
    // 3 => 2 => 4 => 1 => 4
    // insert at first
    if (index === 0) return this.prepend(value);
    // insert at last
    if (index >= this.length) return this.append(value);
    const newNode = new ListNode(value);
    const previousNode = this.getNodeByIndex(index-1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return this;
  }

  deleteAt(index) {
    // 1 => 2 => 3 => 4
    // 1 => 2 => 4
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    const previousNode = this.getNodeByIndex(index);
    const unwantedNode = this.getNodeByIndex(index);
    previousNode.next = unwantedNode.next;
    
    this.length--;
    return this;    
  }

  printList(){
    let current = this.head;
    const listArray = [];
    while(current) {
      listArray.push(current.value);
      current = current.next
    }
    return listArray;
  }
}

const myLL = new SinglyLinkedListWithTail();
myLL.prepend(1);
myLL.deleteAt(0);
myLL.prepend(2);
myLL.prepend(3);
myLL.append(4);
myLL.insertAt(0,5);
myLL.printList();

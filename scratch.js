'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(key, newItem) {
    //  key A newItem = D
    //  A -> B -> E -> F
    //  pc 
    let currNode = this.head;
    let previous = this.head;
    if (this.head === null) {
      return new _Node(newItem, null);
    }

    if (this.head.value === key) {
      return this.head = new _Node(newItem, this.head);
    }

    while (currNode) {
      if (currNode.value === key) {
        return previous.next = new _Node(newItem, currNode);
      }
      previous = currNode;
      currNode = currNode.next;
    }
    return console.log('key doesnt exist in list');
  }

  insertAfter(key, newItem) {
    //  insert new node after node containing key
    let currNode = this.head;
    let previous = this.head;
    if (this.head === null) {
      return new _Node(newItem, null);
    }
    while (currNode) {
      if (currNode.value === key) {
        //  key -> newNode -> key.next
        let nextNode = currNode.next;
        return currNode.next = new _Node(newItem, nextNode);
      }
      previous = currNode;
      currNode = currNode.next;
    }
    return console.log('key doesnt exist in list');
  }
  insertAt(numKey, newItem) {
    let counter = 1;
    let currNode = this.head;
    let previous = this.head;

    if (numKey === counter || numKey === 0) {
      return this.head = new _Node(newItem, this.head);
    }

    while (currNode) {
      if (numKey === counter) {
        return previous.next = new _Node(newItem, currNode);
      }
      previous = currNode;
      currNode = currNode.next;
      counter++;
    }
    return console.log('location requested is longer than linked list');
  }

  find(item) {
    // start at the top
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    // check if we found it
    while (currNode.value !== item) {
      // return null once we hit the end of the list
      // or we dont find it
      if (currNode.next === null) {
        return null;
      }
      else {
        // keep looking
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`${item} not found`);
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(LL) {
  let currentNode = LL.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

function size(LL) {
  let counter = 0;
  let currentNode = LL.head;
  while (currentNode) {
    counter++;
    currentNode = currentNode.next;
  }
  console.log(counter);
  return counter;
}

function isEmpty(LL) {
  let ourLL = LL.head ? false : true;
  console.log(ourLL);
}

function findPrevious(LL, item) {
  if (LL.head.value === item) {
    return console.log(`${item} is the first item in the list`);
  }
  let currNode = LL.head;
  let previous = LL.head;

  while (currNode) {
    if (currNode.value === item) {
      console.log(previous.value);
      return previous.value;
    }
    previous = currNode;
    currNode = currNode.next;
  }
  return console.log(`${item} not found`);
}

function findLast(LL) {
  let currNode = LL.head;
  let previous = LL.head;

  while (currNode) {
    if (!currNode.next) {
      return console.log(currNode.value);
    }
    previous = currNode;
    currNode = currNode.next;
  }
}

function reverseList(LL) {
  let current = LL.head;
  let previous = null;
  let x = current.next;
  let temp;
  while (x) {
    temp = current;
    current.next = previous;
    current = x;
    x = x.next;
    previous = temp;
  }
  LL.head = previous;
}

function main() {
  const SLL = new LinkedList;
  const test = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Hello');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('tauhida');
  // SLL.remove('squirrel');
  // SLL.insertBefore('Boomer', 'Athena');
  // SLL.insertAfter('Hello', 'Hotdog');
  // SLL.insertAt(3, 'Kat');
  // SLL.remove('tauhida');
  // console.log(JSON.stringify(SLL));
  // display(SLL);
  // size(SLL);
  // isEmpty(test);
  // isEmpty(SLL);
  // findPrevious(SLL, 'banana');
  // findLast(SLL);
  reverseList(SLL);
  display(SLL);

}



main();
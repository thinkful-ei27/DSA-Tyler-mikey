'use strict';

class _Node {
  constructor(value, next){
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(key, newItem){
    //  key A newItem = D
    //  A -> B -> E -> F
    //  pc 
    let currNode = this.head;
    let previous = this.head;
    if(this.head === null){
      return new _Node(newItem, null);
    }

    if(this.head.value === key){
      return this.head = new _Node(newItem, this.head);
    }

    while(currNode){
      if(currNode.value === key){
        return previous.next = new _Node(newItem, currNode);
      }
      previous = currNode;
      currNode = currNode.next;
    }
    return console.log('key doesnt exist in list');
  }



  find(item){
    // start at the top
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    // check if we found it
    while(currNode.value !== item) {
      // return null once we hit the end of the list
      // or we dont find it
      if(currNode.next === null) {
        return null;
      }
      else{
        // keep looking
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){ 
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
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
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main (){
  const SLL = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Hello');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('tauhida');
  SLL.insertBefore('Apollo', 'goodbye');
  console.log(SLL);
}
  

main();
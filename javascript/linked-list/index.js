'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let nodeToInsert = new Node(value);
    nodeToInsert.next = this.head;
    this.head = nodeToInsert;
    return undefined;
  }
}

module.exports = LinkedList;

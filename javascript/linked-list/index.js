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

  add(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let nodeToInsert = new Node(value);
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    }
  }

  includes(value) {
    let currentHead = this.head;
    do {
      if (currentHead.value === value) {
        return true;
      }
      currentHead = currentHead.next;
    } while (currentHead);
    return false;
  }

  toString() {
    let result = [];
    let current = this.head;

    while (current !== null) { // if truthy we know that current is equal to a node.
      result.push(`[ ${current.value} ]`);
      current = current.next;
    }
    return result.join(' -> ') + ' -> NULL';
  }
}

exports.Node = Node;

module.exports = LinkedList;


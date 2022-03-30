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
    this.size = 0;
  }

  add(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let nodeToInsert = new Node(value);
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    }
    this.size++;
    return this.size;
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

  append(value) {
    let current = this.head;
    if (current === null) {
      this.head = new Node(value);
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
    return this.size;
  }

  insertBefore(value, newValue) {
    if (this.head === null) {
      return this.size;
    }
    if (this.head.value === value) {
      let nodeToInsert = new Node(newValue);
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
      this.size++;
      return this.size;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        let nodeToInsert = new Node(newValue);
        nodeToInsert.next = current.next;
        current.next = nodeToInsert;
        this.size++;
        return this.size;
      } else {
        current = current.next;
      }
    }
    return this.size;
  }
  insertAfter(value, newValue) {
    if (this.head === null) {
      return this.size;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let nodeToInsert = new Node(newValue);
        nodeToInsert.next = current.next;
        current.next = nodeToInsert;
        this.size++;
        return this.size;
      } else {
        current = current.next;
      }
    }
    return this.size;
  }

}

exports.Node = Node;

module.exports = LinkedList;


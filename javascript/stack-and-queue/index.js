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
  kthFromEnd(k) {
    if (k > this.size || k < 0) {
      return undefined;
    }
    let result = [];
    let current = this.head;
    while (current !== null) { // if truthy we know that current is equal to a node.
      result.unshift(current.value);
      current = current.next;
    }
    return result[k];
  }
  zipLists(list1, list2) {
    let c1 = list1.head;
    let c2 = list2.head;
    while(c1 || c2) {
      if (c1) {
        this.append(c1.value);
        c1 = c1.next;
      }
      if (c2) {
        this.append(c2.value);
        c2 = c2.next;
      }
    }
    return this;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size <= 0;
  }
  pop() {
    if (this.isEmpty()) {
      console.error('you cannot pop if stack is empty');
      return undefined;
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size -= 1;
    return temp.value;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
    return this.size;
  }
  peek() {
    if (this.isEmpty()) {
      console.error('you cannot pop if stack is empty');
      return undefined;
    } else {
      return this.top.value;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size <= 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.error('you cannot dequeue if queue is empty');
      return undefined;
    }
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    this.size -= 1;
    return temp.value;
  }
  enqueue(value) {
    let node = new Node(value);
    this.rear.next = node;
    this.rear = node;
    this.size += 1;
    return this.size;
  }

  peek() {
    if (this.isEmpty()) {
      console.error('you cannot dequeue if queue is empty');
      return undefined;
    } else {
      return this.front.value;
    }
  }

}

exports.Node = Node;

module.exports = {
  LinkedList,
  Stack,
  Queue
};

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
    return this.size;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('you cannot pop if stack is empty');
      return undefined;
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size -= 1;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      console.log('you cannot pop if stack is empty');
      return undefined;
    } else {
      return this.top.value;
    }
  }
}


class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.size = 0;
  }
  enqueue(value) {
    if (!this.stack2.isEmpty()) {
      while(!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
      }
    }
    this.stack1.push(value);
    this.size += 1;
    return this.size;
  }
  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw 'you cannot dequeue an empty PseudoQueue!';
    }
    if (!this.stack1.isEmpty()) {
      while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    this.size -= 1;
    return this.stack2.pop();
  }
}

// exports.Node = Node;

module.exports = { Node, Stack, PseudoQueue };



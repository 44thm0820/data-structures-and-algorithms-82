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

function validBrackets (str) {
  const obj = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const openingBs = Object.keys(obj);
  const closingBs = Object.values(obj);

  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if ( openingBs.includes(str[i]) ) {
      stack.push(str[i]);
    } else if ( closingBs.includes(str[i]) ) {
      if( stack.isEmpty() || obj[stack.pop()] !== str[i] ) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

// exports.Node = Node;

module.exports = { Stack, validBrackets };



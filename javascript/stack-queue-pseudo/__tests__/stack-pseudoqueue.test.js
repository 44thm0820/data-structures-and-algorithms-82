'use strict';
const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { Stack, Queue, PseudoQueue } = require('../index.js');
// const { Node } = require('../index.js');

describe('testing the Stack Class', () => {
  // Can successfully instantiate an empty stack
  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
    expect(stack.size).toEqual(0);
  });
  // Can properly push onto a stack
  test('Can properly push onto a stack', () => {
    let stack = new Stack();
    expect(stack.push(52)).toEqual(1);
    expect(stack.top.value).toEqual(52);
    expect(stack.push('cards')).toEqual(2);
    expect(stack.top.value).toEqual('cards');
  });
  // Can successfully push multiple values onto a stack
  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    expect(stack.push(3)).toEqual(1);
    expect(stack.top.value).toEqual(3);
    expect(stack.push('2')).toEqual(2);
    expect(stack.top.value).toEqual('2');
    expect(stack.push(1)).toEqual(3);
    expect(stack.top.value).toEqual(1);
  });
  // Can successfully pop off the stack
  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    expect(stack.push(3)).toEqual(1);
    expect(stack.top.value).toEqual(3);
    expect(stack.push('2')).toEqual(2);
    expect(stack.top.value).toEqual('2');
    expect(stack.push(1)).toEqual(3);
    expect(stack.top.value).toEqual(1);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual('2');
    expect(stack.pop()).toEqual(3);
  });

  // Can successfully empty a stack after multiple pops
  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    expect(stack.push(3)).toEqual(1);
    expect(stack.top.value).toEqual(3);
    expect(stack.push('2')).toEqual(2);
    expect(stack.top.next.value).toEqual(3);
    expect(stack.push(1)).toEqual(3);
    expect(stack.top.next.next.value).toEqual(3);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual('2');
    expect(stack.pop()).toEqual(3);
    expect(stack.size).toEqual(0);
  });

  // Can successfully peek the next item on the stack
  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    expect(stack.push(3)).toEqual(1);
    expect(stack.top.value).toEqual(3);
    expect(stack.peek()).toEqual(3);
    expect(stack.push('2')).toEqual(2);
    expect(stack.top.value).toEqual('2');
    expect(stack.peek()).toEqual('2');
    expect(stack.push(1)).toEqual(3);
    expect(stack.top.value).toEqual(1);
    expect(stack.peek()).toEqual(1);
  });

  // Calling pop or peek on empty stack raises exception
  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(stack.push(3)).toEqual(1);
    expect(stack.top.value).toEqual(3);
    expect(stack.push('2')).toEqual(2);
    expect(stack.top.value).toEqual('2');
    expect(stack.push(1)).toEqual(3);
    expect(stack.top.value).toEqual(1);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual('2');
    expect(stack.pop()).toEqual(3);
    expect(stack.size).toEqual(0);
    expect(stack.peek()).toEqual(undefined);
    expect(stack.pop()).toEqual(undefined);
  });
});



describe('testing the PseudoQueue Class', () => {
  test('Can successfully enqueue into a pseudoqueue', () => {
    let pqueue = new PseudoQueue();
    expect(pqueue.size).toEqual(0);
    expect(pqueue.enqueue(2)).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a pseudoqueue', () => {
    let pqueue = new PseudoQueue();
    expect(pqueue.enqueue(3)).toEqual(1);
    expect(pqueue.enqueue('2')).toEqual(2);
    expect(pqueue.enqueue(false)).toEqual(3);
  });
  // Can successfully dequeue out of a pseudoqueue the expected value
  test('Can successfully dequeue out of a pseudoqueue the expected value', () => {
    let pqueue = new PseudoQueue();
    expect(pqueue.enqueue(3)).toEqual(1);
    expect(pqueue.enqueue('2')).toEqual(2);
    expect(pqueue.dequeue()).toEqual(3);
    expect(pqueue.size).toEqual(1);
    expect(pqueue.enqueue('hello')).toEqual(2);
    expect(pqueue.dequeue()).toEqual('2');

  });

  // Can successfully empty a pseudoqueue after multiple dequeues
  test('Can successfully empty a pseudoqueue after multiple dequeues', () => {
    let pqueue = new PseudoQueue();
    expect(pqueue.enqueue(3)).toEqual(1);
    expect(pqueue.enqueue('2')).toEqual(2);
    expect(pqueue.dequeue()).toEqual(3);
    expect(pqueue.size).toEqual(1);
    expect(pqueue.dequeue()).toEqual('2');
    expect(pqueue.size).toEqual(0);
  });

  // Can successfully instantiate an empty pseudoqueue
  test('Can successfully instantiate an empty pseudoqueue', () => {
    let pqueue = new PseudoQueue();
    expect(pqueue.size).toEqual(0);
  });

  // Calling dequeue on empty pseudoqueue raises exception
  test('Calling dequeue on empty pseudoqueue raises exception', () => {
    let pqueue = new PseudoQueue();
    expect(pqueue.size).toEqual(0);
    expect(() => {
      pqueue.dequeue();
    }).toThrow('you cannot dequeue an empty PseudoQueue!');
  });
});



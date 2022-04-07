'use strict';
const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { Stack, validBrackets } = require('../index.js');

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

describe('testing the validBrackets function', () => {

  let a = '{}';
  let b = '{}(){}';
  let c = '()[[Extra Characters]]';
  let d = '(){}[[]]';
  let e = '{}{Code}[Fellows](())';
  let f = '[({}]';
  let g = '(](';
  let h = '{(})';
  let i = '{';
  let j = ')';
  let k = '[}';

  test('Can successfully return the correct value', () => {
    expect(validBrackets(a)).toEqual(true);
    expect(validBrackets(b)).toEqual(true);
    expect(validBrackets(c)).toEqual(true);
    expect(validBrackets(d)).toEqual(true);
    expect(validBrackets(e)).toEqual(true);
    expect(validBrackets(f)).toEqual(false);
    expect(validBrackets(g)).toEqual(false);
    expect(validBrackets(h)).toEqual(false);
    expect(validBrackets(i)).toEqual(false); // error unmatched opening { remaining.
    expect(validBrackets(j)).toEqual(false); // error closing ) arrived without corresponding opening.
    expect(validBrackets(k)).toEqual(false); // error closing }. Doesn’t match opening (.
  });
});


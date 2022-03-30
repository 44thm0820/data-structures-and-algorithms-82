'use strict';
const LinkedList = require('../index.js');
// const { Node } = require('../index.js');

// Require our linked list implementation


describe('testing the Linked List Class', () => {

  test('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  // Can properly insert into the linked list
  test('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.add(52);
    list.add('cards');
    expect(list.head.value).toEqual('cards');
    expect(list.head.next.value).toEqual(52);
  });

  // The head property will properly point to the first node in the linked list
  test('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.add(52);
    list.add('cards');
    list.add('last one added');
    expect(list.head.value).toEqual('last one added');
    expect(list.head.next.value).toEqual('cards');
    expect(list.head.next.next.value).toEqual(52);
  });

  // Can properly insert multiple nodes into the linked list
  test('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.add(3);
    list.add('2');
    list.add(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual('2');
    expect(list.head.next.next.value).toEqual(3);
  });

  // Will return true when finding a value within the linked list that exists
  test('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.add(30);
    list.add(27);
    list.add(12);
    list.add(1941);
    expect(list.includes(30)).toEqual(true);
    expect(list.includes(27)).toEqual(true);
    expect(list.includes(12)).toEqual(true);
    expect(list.includes(1941)).toEqual(true);
  });

  // Will return false when searching for a value in the linked list that does not exist
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.add(30);
    list.add(27);
    list.add(12);
    list.add(1941);
    expect(list.includes(798)).toEqual(false);
    expect(list.includes(227)).toEqual(false);
    expect(list.includes('fatburger')).toEqual(false);
    expect(list.includes('12')).toEqual(false);
    expect(list.includes('trouble')).toEqual(false);
    expect(list.includes(12941)).toEqual(false);
  });

  // Can properly return a collection of all the values that exist in the linked list
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.add('c');
    list.add('b');
    list.add('a');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> NULL');
  });
});

describe('testing the Linked List Class to allow various insertion methods', () => {

  // Can successfully add a node to the end of the linked list
  test('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.add('b');
    list.add('a');
    list.append('c');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> NULL');
  });

  // Can successfully add multiple nodes to the end of a linked list
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append('a');
    expect(list.append('b')).toEqual(2);
    list.append('c');
    list.append('d');
    list.append('e');
    list.append('f');
    list.append('g');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ g ] -> NULL');
  });

  // Can successfully insert a node before a node located in the middle of a linked list
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');
    list.append('f');
    list.append('g');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ g ] -> NULL');
    list.insertBefore('g','fz');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
  });

  // Can successfully insert a node before the first node of a linked list
  test('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    expect(list.insertBefore('a', '0putmehere')).toEqual(0);
    list.append('a');
    list.append('b');
    expect(list.append('c')).toEqual(3);
    list.append('d');
    list.append('e');
    list.append('f');
    list.append('g');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ g ] -> NULL');
    list.insertBefore('g','fz');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertBefore('a', '0')).toEqual(9);
    expect(list.insertBefore('APPLES', '0')).toEqual(9);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
  });

  // Can successfully insert after a node in the middle of the linked list
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    expect(list.insertBefore('a', '0putmehere')).toEqual(0);
    expect(list.insertAfter('a', '0putmehere')).toEqual(0);
    list.append('a');
    list.append('b');
    expect(list.append('c')).toEqual(3);
    list.append('d');
    list.append('e');
    list.append('f');
    list.append('g');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ g ] -> NULL');
    list.insertBefore('g','fz');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertBefore('a', '0')).toEqual(9);
    expect(list.insertBefore('APPLES', '0')).toEqual(9);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertAfter('b', 'bb')).toEqual(10);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ bb ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertAfter('z', 'zz')).toEqual(10);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ bb ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
  });

  // Can successfully insert a node after the last node of the linked list
  test('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    expect(list.insertBefore('a', '0putmehere')).toEqual(0);
    expect(list.insertAfter('a', '0putmehere')).toEqual(0);
    list.append('a');
    list.append('b');
    expect(list.append('c')).toEqual(3);
    list.append('d');
    list.append('e');
    list.append('f');
    list.append('g');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ g ] -> NULL');
    list.insertBefore('g','fz');
    expect(list.toString()).toEqual('[ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertBefore('a', '0')).toEqual(9);
    expect(list.insertBefore('APPLES', '0')).toEqual(9);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertAfter('b', 'bb')).toEqual(10);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ bb ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertAfter('z', 'zz')).toEqual(10);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ bb ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> NULL');
    expect(list.insertAfter('g', 'zzzzz')).toEqual(11);
    expect(list.toString()).toEqual('[ 0 ] -> [ a ] -> [ b ] -> [ bb ] -> [ c ] -> [ d ] -> [ e ] -> [ f ] -> [ fz ] -> [ g ] -> [ zzzzz ] -> NULL');
  });

});

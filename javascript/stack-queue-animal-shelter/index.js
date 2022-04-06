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
      console.log('you cannot dequeue if queue is empty');
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
    if (this.size === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size += 1;
    return this.size;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('you cannot dequeue if queue is empty');
      return undefined;
    } else {
      return this.front.value;
    }
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

class Animal {
  constructor(name) {
    this.name = name;
    this.age = undefined;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

class AnimalShelter{
  constructor() {
    this.queueCats = new Queue();
    this.queueDogs = new Queue();
    this.size = 0;
  }
  enqueue(animal) {
    if (animal instanceof Cat) {
      this.queueCats.enqueue(animal);
      this.size += 1;
    } else if (animal instanceof Dog) {
      this.queueDogs.enqueue(animal);
      this.size += 1;
    } else {
      throw 'only dogs and cats are allowed to reside in our shelter';
    }
    return this.size;
  }
  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }
    if (this.size === 0) {
      throw ('no more animals available');
    }
    if (pref === 'dog' && this.queueDogs.size > 0) {
      this.size -= 1;
      return this.queueDogs.dequeue();
    } else if (pref === 'cat' && this.queueCats.size > 0) {
      this.size -= 1;
      return this.queueCats.dequeue();
    } else if (pref === 'cat' && this.queueCats.size <= 0) {
      console.log('Sorry, no more cats available.');
    } else if (pref === 'dog' && this.queueDogs.size <= 0) {
      console.log('Sorry, no more dogs available.');
    }
    return null;
  }
}
let shelter = new AnimalShelter();
let dog = new Dog('Mike');
let dog2 = new Dog('Rover');
let cat = new Cat('Princess');
let cat2 = new Cat('Jennifer');


shelter.enqueue(dog);
shelter.enqueue(cat);
shelter.enqueue(dog2);
shelter.enqueue(cat2);


// exports.Node = Node;

module.exports = { Stack, Queue, AnimalShelter, Animal, Cat, Dog };



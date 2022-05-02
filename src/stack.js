const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.stack = [];
    this.peekElement = null;
  }

  
  push(element) {
    this.stack.push(element);
    this.peekElement = element;
  }

  pop() {
    let result = this.peekElement;
    this.peekElement = this.stack[this.stack.length - 2];
    this.stack.pop();
    return result;
  }

  peek() {
    return this.peekElement;
  }
}

module.exports = {
  Stack
};

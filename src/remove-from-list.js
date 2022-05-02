const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

}

function indexOf(element, l) {
  let current = l.head;
  let index = 0;

  while (current) {
    if (current.value === element) {
      return index;
    }

    current = current.next;
    index++;
  }

  return -1;
}

function removeKFromList(l, k) {
  while (indexOf(k) !== -1) {
    removeAt(l.indexOf(element, l), l);
  }

  function removeAt(position, l) {
    if (position < 0 || position >= l.length) {
      return null;
    }

    let current = l.head;

    if (position === 0) {
      l.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    l.length--;
    return current.value;
  }

  return l;
}

module.exports = {
  removeKFromList
};

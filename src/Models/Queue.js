import { Node } from "./Node.js";

export class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(element) {
    let newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    let removed = this.front;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    return removed.data;
  }

  isEmpty() {
    return this.front === null;
  }

  printQueue() {
    let current = this.front;
    let queueString = '';
    while (current) {
      queueString += current.data + '\n';
      current = current.next;
    }
    return queueString;
  }
}

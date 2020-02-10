console.clear();
var queue=new Queue();
console.log(queue.isEmpty());
queue.enque("a");
queue.enque("b");
queue.enque("c");
queue.enque("d");
queue.enque("e");
console.log(queue.front());
console.log(queue.size());
console.log(queue.isEmpty());

queue.deque();
queue.deque();

queue.print();
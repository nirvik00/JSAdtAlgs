/*
    * queue is FIFO: First-In-First-Out
    * abstract data type which implements:
    *   enque
    *   deque
    *   front
    *   isEmpty
    *   size
*/

function Queue(){
    var items=[];
    this.enque=function(element){
        items.push(element);
    }
    this.dequeue=function(){
        return items.shift();
    }
    this.front=function(){
        return items[0];
    }
    this.isEmpty=function(){
        return items.length==0;
    }
    this.clear=function(){
        return items=[];
    }
    this.size=function(){
        return items.length;
    }
    this.print=function(){
        return console.log(items.join('-').toString());
    }
}
/*
    * stack is LIFO: Last-In-First-Out
    * abstract data type which implements:
    *   push
    *   pop
    *   peek
    *   isEmpty
    *   clear
    *   size
*/

function Stack(){
    var items=[];
    this.push=function(element){
        items.push(element);
    }
    this.pop=function(){
        return items.pop();
    }
    this.peek=function(){
        return items[items.length-1];
    }
    this.isEmpty=function(){
        return items.length==0;
    }
    this.size=function(){
        return items.length;
    }
    this.clear=function(){
        items=[];
    }
    this.print=function(){
        console.log(items.join('-').toString());
    }
}
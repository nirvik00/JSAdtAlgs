/*
    * Linked list
    *   append
    *   insert
    *   removeAt
    *   indexOf
    *   isEmpty
    *   size
    *   toString
    *   print
*/
var Node=function(element){
    this.element=element;
    this.next=null;
}

function LinkedList(){
    var length=0;
    var head=null;
    this.append= function(element){
        var node = new Node(element);
        var current;
        if(head === null){
            head=node;
        }else{
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
            length++;
        }
    };

    this.insert=function(position, element){
        if(position >=0 && position<= length){
            var node=new Node(element);
            var current=head;
            var previous;
            var index=0;
            
            if(position===0){
                node.next=current;
                head=node;
            }else{
                while(index++ < position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    this.removeAt=function(position){
        if(position>-1 && position<length){
            var current=head;
            var previous;
            var index=0;
            if(position===0){
                head=current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current=current.next;
                }
                previous.next=current.next;
            }            
            length--;
            return current.element;
        }else{
            return null;
        }
    };

    this.indexOf=function(element){
        var index=null;
        var current=head;
        var k=0;
        while(current){
            if(current.element===element){
                index=k;
                break;
            }
            k++;
            current=current.next;
        }
        return index;
    };

    this.isEmpty=function(){
        return length===0;
    };

    this.size=function(){
        return length;
    };

    this.toString=function(){
        var string = '';
        var current=head;
        while(current){
            string =current.element;
            current=current.next;
        }
        return string;
    };

    this.print=function(){
        var string ='';
        var current=head;
        while(current){
            string += current.element+ " ";
            current=current.next;
        }
        return string;
    };
}
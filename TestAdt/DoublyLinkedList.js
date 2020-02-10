//
//
//

var Node=function(element){
    this.element=element;
    this.next=null;
    this.prev=null;
}

function DoublyLinkedList(){
    var length=0;
    var head=null;
    var tail=null;
    
    this.append=function(element){
        var node=new Node(element);
        if(head===null){
            head=node;
        }else{
            var current=head;    
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    }; 

    this.removeAt=function(position, element){
        if(position>=0 && position<length){
            var node=new Node(element);
            var previous;
            var current =head;
            var index=0;
            if(position===0){
                head=current.next;
            }
        }
    };
    
    this.insertAt=function(position, element){
        if(position>=0 && position<length){
            var node=new Node(element);
            var current=head;
            var previous;
            var index=0;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }else{
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                current.prev=node;
                node.prev=previous;
                previous.next=node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    this.size=function(){return length; }
    
    this.print=function(){
        var str="";
        var current=head;
        while(current){
            str+=current.element + " ";
            current=current.next;
        }
        console.log(str);
    };
}
function BinarySearchTree(){
    
    var root=null;
    this.insert=function(key){
        var newNode=new Node(key);
        if(root===null){
            root=newNode;
        }else{
            insertNode(root, newNode);
        }
    }

    //
    this.inOrderTraverse=function(callback){
        inOrderTraverseNode(root, callback);
    }
    var inOrderTraverseNode=function(node, callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }
};

var Node = function(key){
    this.key=key;
    this.left=null;
    this.right=null;
};

var insertNode=function(node, newNode){
    if(newNode.key<node.key){
        if(node.left===null){
            node.left=newNode;
        }else{
            insertNode(node.left, newNode);
        }
    }else{
        if(node.right===null){
            node.right=newNode;
        }else{
            insertNode(node.right, newNode);
        }
    }
};

function printNode(value){
    console.log(value);
}


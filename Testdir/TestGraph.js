//
//
//

console.clear();

//
//
//

var graph=new Graph();
var myVertices=['a','b','c','d','e','f','g','h','i'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('c', 'd');
graph.addEdge('c', 'g');
graph.addEdge('d', 'g');
graph.addEdge('d', 'h');
graph.addEdge('b', 'e');
graph.addEdge('b', 'f');
graph.addEdge('e', 'i');

console.log(graph.toString());

console.log("\ngraph traversal algorithm \n--------------------");

function printNode(value){
    console.log('Visited vertex : '+ value);
}
var s="Visited vertex -> ";
graph.bfs(myVertices[0],s);
console.log(s); 
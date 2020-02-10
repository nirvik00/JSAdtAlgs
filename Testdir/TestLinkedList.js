console.clear();
var a=new LinkedList();
a.append(10);
a.append(15);
a.append(23);
// a.insert(1,2);

console.log(a.print());

a.removeAt(1);
console.log(a.print());

console.log("insert");
a.insert(1,100);
a.insert(0,200);
console.log(a.print());

console.log("index of");
console.log(a.indexOf(23));
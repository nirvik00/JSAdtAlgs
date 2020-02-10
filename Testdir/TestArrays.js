//
//
//  ARRAY
// used in Stack and Queue 
// push = add item to end of array
// length = length of array
// pop = retrieve the last item in array and remove it from array
// shift = retrieve the first item in array and remove it
// unshift = retrieve the first item in array 
//
//
//
console.log('\n\nTESTING ARRAYS : \n');
var days=[1,2,3,3,3,4,5];
for(var i=0; i<days.length; i++){
    // console.log(i+"> "+days[i]);
}


console.log('\n\nfibonacci : \n');
var fibonacci=[];
fibonacci[0]=1;
fibonacci[1]=1;
fibonacci[2]=1;
for(var i=3; i<10; i++){
    var x=fibonacci[i-1]+fibonacci[i-2];
    fibonacci.push(x);
}
for(var i=0; i<fibonacci.length; i++){
    console.log(i+") "+fibonacci[i]);
}

console.log("\n\n Arrays Test:");
var numbers=[0,1,2,3,4,5,6,7,8,9];
console.log(numbers);
numbers.push(10);
numbers.push(11);
console.log(numbers);
numbers.unshift(-2);
numbers.unshift(-20, -10);
console.log(numbers);

for(var i=0; i<3; i++){
    var t=numbers.pop();
    console.log(t);
}
console.log(numbers);
console.log(numbers.length);

var arr1=[1,2,3,4];
var arr2=['a','b','c'];
var arr3=arr1.concat(arr2);
console.log(arr3);

arr1.sort(function(a,b){
    return a-b;
});






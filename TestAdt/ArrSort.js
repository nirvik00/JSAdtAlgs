
console.clear();

var arr1=[1,232,12,43,12,43,76,123];
arr1.sort(function(a,b){
    return a-b;
});
console.log(arr1);


function compare(a,b){
    if(a<b) return -1;
    else return 1;
}

var arr2=[1,232,12,43,12,43,76,123];
arr2.sort(compare);
console.log(arr2);
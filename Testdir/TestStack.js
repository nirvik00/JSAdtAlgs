
// sample of stack implementation //

function baseConverter(decNumber, base){
    console.clear();
    var remStack=new Stack(),
    rem, 
    binaryString='';

    while(decNumber>0){
        rem=Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }

    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

var t=baseConverter(10, 3);
console.log(t);
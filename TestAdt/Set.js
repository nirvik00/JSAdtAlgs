//
//
/// Object.keys(objectName)
/// Object.values(objectName)
/// objectName.hasOwnProperty(keyName)
//
//
function Set(){

    // important detail : using object to represent data
    // objectName= items
    var items={}; 

    this.add =function(value){
        if(!this.has(value)){
            items[value]=value;
            return true;
        };
        return false;
    };

    this.remove=function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };
    
    this.has=function(value){
        // return value in items;
        return items.hasOwnProperty(value);
    };

    this.clear=function(){
        items={};
    };

    this.size=function(){
        return Object.keys(items).length;
    };

    this.values=function(){
        return Object.values(items);
    }

    this.print=function(){
        var s="";
        for( v in items){
            s+=v + " ";
        }
        console.log(s)
    }

    this.union=function(otherSet){
        var unionSet=new Set();
        var values=this.values();
        for(var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        values=otherSet.values();
        for(var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
    }

    this.intersection=function(otherSet){
        var intersectionSet=new Set();
        var values=this.values();
        for(var i=0; i<values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    this.difference=function(otherSet){
        var differenceSet=new Set();
        var values=this.values();
        for(var i=0; i<values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
}
//
//
//
function Dictionary(){
    var items={};

    this.set=function(key,value){
        items[key] = value;
     };

    this.remove=function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };

    this.has=function(key){ 
        return key in items;
    };
    
    this.get=function(key){
        return this.has(key) ? items[key] : undefined;
    };

    this.clear=function(){
        items={};
<<<<<<< HEAD
    };

    this.size=function()
    {
        return Object.keys(items).length;
    };
    this.keys=function(){};
=======
    };

    this.size=function(){
        var k=0;
        for( var x in items){
            k++;
        }
        return k;
    };


    this.keys=function(){
        var keys=[];
        for(var k in items){
            keys.push(k);
        }
        return keys;
    };
>>>>>>> a517b34b306e729393ba55dd5f0c24789b434947

    this.values=function(){
        var values=[];
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };
    
}
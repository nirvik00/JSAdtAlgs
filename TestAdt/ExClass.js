var obj= {};

obj={
    name:{
        first:'Gandalf',
        last:'the Grey'
    },
    address: 'Middle Earth'
};

/* Person class */
var Person=function(name, age){
    this.name=name;
    this.age=age;
    this.display=function(){
        console.log(this.name + ", " +this.age);
    }
}

/* Book class */
function Book(title, pages, isbn){
    this.title=title;
    this.pages=pages;
    this.isbn=isbn;
    this.printIsbn=function(){
        console.log(this.isbn);
    };
}
/* function can be added outside class with prototype */
Book.prototype.printTitle=function(){
    var i=0;
    while(i<10){
        console.log(i+","+this.title);
        i++;
    }
}


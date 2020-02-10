var friends=[
    {name:'a', age:100},
    {name:'b', age:25},
    {name:'c', age:225},
    {name:'d', age:125}
];

function compareFriends(a,b){
    if(a.age<b.age) return -1;
    else return 1;
}

friends.sort(compareFriends);

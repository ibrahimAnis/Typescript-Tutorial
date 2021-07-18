class Counter
{
private x:number;
constructor(x:number)
{
this.x=x;
}
public getCounter(){
return function(){
let j=this.x;
this.x++;
return j;
}}}
var c=new Counter(1);
var counter1=c.getCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
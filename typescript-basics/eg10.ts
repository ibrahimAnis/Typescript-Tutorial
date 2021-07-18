class Bulb
{
 constructor(private wattage:number){
 }
getWattage(): number {
 return this.wattage;
}}
var b:Bulb;
b=new Bulb(60);
console.log("Wattage is : "+b.getWattage());
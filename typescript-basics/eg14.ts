module Inventory
{
 export class Item {
 public getBrand(): string
 {
 return "Philips";
 }
 }
}
var k=new Inventory.Item;
console.log(k.getBrand());
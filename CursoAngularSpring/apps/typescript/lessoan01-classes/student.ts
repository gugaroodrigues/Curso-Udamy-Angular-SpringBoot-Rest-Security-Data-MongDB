/*
Heranças 
*/
import { Person } from './person';
export class Student extends Person{
    constructor(name: string){
        super(name);
    }
    /*
    sobrescrita de metodos;
    */
   public showAge(age: number):void{
       console.log('Estudando..');
       super.showAge(25);
   }
}
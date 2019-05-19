import { TestInterface } from './testData';


export class TestClass{
    id:Number;
    name: String;
    username:String;
    email:String;
    constructor(){
        
    }
    testData: TestInterface[] = [
        {
          id: 1,
        name: "ABCD",
        username: "EFGH",
        email: "abcd@efgh.com"
        },
        {
          id: 2,
          name: "AD",
          username: "EGH",
          email: "ad@efgh.com"
        }
        ]
    
      editName(d):void{
        d.name = "hiji";
        console.log(d);
      }
}
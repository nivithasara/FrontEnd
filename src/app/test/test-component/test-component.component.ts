import { Component, OnInit } from '@angular/core';
import { TestInterface } from 'src/app/models/testData';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  item: TestInterface;
  constructor() {  }
  
  ngOnInit() {
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

  editName(item,j):void{
    item[j].name="hiji";
    console.log(item);
  }
}

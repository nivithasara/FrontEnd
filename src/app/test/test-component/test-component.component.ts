import { Component, OnInit } from '@angular/core';
import { TestInterface } from 'src/app/models/testData';
import { TestClass } from 'src/app/models/testClass';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  x;
  tdata;

  constructor() { }

  ngOnInit() {
    this.x = new TestClass();
    this.tdata = this.x.testData;
    console.log(this.tdata);
  }

  editData(item: TestInterface[]){
    this.x.editName(item);
  }
}

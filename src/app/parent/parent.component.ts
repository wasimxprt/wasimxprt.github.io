import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  showChild: boolean = false;

  constructor() {
    console.log("Parent constructor");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Parent on init");
  }

  showChildHandler() {
    this.showChild = !this.showChild;
  }
}

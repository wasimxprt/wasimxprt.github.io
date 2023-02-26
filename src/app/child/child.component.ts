import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  counter: number = 0;
  interval: any;

  constructor() {
    console.log("Child constructor");
  }

  ngOnInit(): void {
    console.log("Child on init");

    this.interval = setInterval(() => {
      console.log(this.counter)
      this.counter = this.counter + 1;
    }, 1000)
  }

  ngOnDestroy(): void {
    console.log("Child component removed");
    clearInterval(this.interval)
  }
}

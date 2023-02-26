import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../services/socketio.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  countries$: string[] = [];
  isloading: boolean = false;
  myObsevable:any;


  constructor(private socketService: SocketioService) { }

  ngOnInit(): void {
    this.isloading = true;
    this.myObsevable = this.socketService.getCountries();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.socketService.getCountries().subscribe((data) => {
    //   this.countries$ = data;
    //   this.isloading = false;
    // })
  }
}

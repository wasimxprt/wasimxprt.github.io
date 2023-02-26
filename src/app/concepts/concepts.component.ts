import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../services/socketio.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  constructor(private socketService: SocketioService) { }

  number: any = "14";
  divisibleBy: any;

  schoolsCount: number = 0;
  hospitalsCount: number = 0;

  schoolLoading: boolean = false;
  hospitalLoading: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.schoolLoading = true;
    this.hospitalLoading = true;

    //this.getData();
    this.getAllDataUsingForkJoin();
  }
  getData() {
    this.socketService.getSchoolData().subscribe((data) => {
      this.schoolsCount = data;
      this.schoolLoading = false;
    });

    this.socketService.getHOspitalData().subscribe((data) => {
      this.hospitalsCount = data;
      this.hospitalLoading = false;
    });
  }

  getAllDataUsingForkJoin() {
    this.socketService.getAllData().subscribe((data) => {
      this.schoolsCount = data[0];
      this.hospitalsCount = data[1];
      this.schoolLoading = false;
      this.hospitalLoading = false;
    })
  }
}

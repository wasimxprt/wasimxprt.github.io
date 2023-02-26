import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interceptordemo',
  templateUrl: './interceptordemo.component.html',
  styleUrls: ['./interceptordemo.component.css']
})
export class InterceptordemoComponent {
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpClient.get('https://localhost:3000/api/users')
      .subscribe((data) => {
        console.log(data);
      })
  }
}

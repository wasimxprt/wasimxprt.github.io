import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: any;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT_DEV);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  getSchoolData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(20);
        observer.complete()
      }, 2000)
    })
  }

  getHOspitalData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(100);
        observer.complete()
      }, 5000)
    })
  }

  getAllData() {
    let observable1 = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(20);
        observer.complete()
      }, 2000)
    });

    let observable2 = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(100);
        observer.complete()
      }, 5000)
    });

    return forkJoin([observable1, observable2]);
  }

  getCountries() {
    return new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(["India", "UK", "UAE"]);
        observer.complete();
      },3000)
    })
  }


}

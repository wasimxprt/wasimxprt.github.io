import { SocketioService } from '../services/socketio.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import DerivAPIBasic from "@deriv/deriv-api/dist/DerivAPIBasic";
import { WebSocket } from "ws";



export interface PeriodicElement {
  name: string;
  // position: number;
  // weight: number;
  // symbol: string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit, AfterViewInit {

  title = 'socketio-angular';
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  isLoading = true;

  constructor(private socketService: SocketioService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {

    const api = new DerivAPIBasic({ app_id: 1089 });
    api.assetIndex().then((response:any) => {
      if (response.error) {
        console.log("Error ", response.error)
      }
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<PeriodicElement>(response.asset_index.filter((item:any) => item[0].includes("frx")));
    });

    // const ticks = api.ticks('R_100');
    // ticks.onUpdate().subscribe(console.log);


    
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

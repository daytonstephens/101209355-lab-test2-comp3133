import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit{

  //launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  launchDataArray = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.appService.getAllLaunches()
    .subscribe((response: any) => {
      console.log(response);
      this.launchDataArray = response;
    }, err => {
      console.log(err);
    })
  }

}

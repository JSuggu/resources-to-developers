import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../core/services/get-data/get-data.service';
import { NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit { 
  filterChosen: string = '';
  content: any[] = [];

  constructor(private getDataService: GetDataService, private router: Router){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) 
    ).subscribe((event: any) => {
      this.filterChosen =  event.url.slice(1);
    });
  }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    if(this.filterChosen == "api"){
      this.getDataService.getApiData().subscribe((data: any) => {
        this.content = data.result;
      });
      return;
    } 

    if(this.filterChosen == "design"){
      this.getDataService.getDesignData().subscribe((data: any) => {
        this.content = data.result;
      });
      return;
    } 

    if(this.filterChosen == "programming-logic"){
      this.getDataService.getProgrammingLogicData().subscribe((data: any) => {
        this.content = data.result;
      });
      return;
    } 

    if(this.filterChosen == "tutorials-and-guides"){
      this.getDataService.getTutorialsData().subscribe((data: any) => {
        this.content = data.result;
      });
      return;
    } 

    else {
      this.getDataService.getOthersData().subscribe((data: any) => {
        this.content = data.result;
      });
      return;
    }
  }
}

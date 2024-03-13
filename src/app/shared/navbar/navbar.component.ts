import { Component, HostListener, OnInit } from '@angular/core';
import { GetDataService } from '../../core/services/get-data/get-data.service';
import { NgFor, NgIf } from '@angular/common';
import {Event, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  phoneMode: boolean;
  showMenu: boolean;
  filterChosen: string = '';
  menuOptions:any[] = [];

  constructor(private getDataService: GetDataService){
    this.phoneMode = window.innerWidth < 480? true : false;
    this.showMenu = false;
  }

  ngOnInit(): void {  
    this.getDataService.getMenuOptions().subscribe((data: any) => {
      this.menuOptions = data.result;
    });
  }

  onMenu():void{
    this.showMenu = this.showMenu == false ? true : false;
  }

  @HostListener("window:resize", ['$event'])
  onResize(event: Event): void {
    this.phoneMode = window.innerWidth < 480? true : false;
  }  
}

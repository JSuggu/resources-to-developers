import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../core/services/get-data/get-data.service';
import { NgFor, NgIf } from '@angular/common';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  filterChosen: string = '';
  menuOptions:any[] = [];

  constructor(private getDataService: GetDataService){}

  ngOnInit(): void {  
    this.getDataService.getMenuOptions().subscribe((data: any) => {
      this.menuOptions = data.result;
    });
  }
}

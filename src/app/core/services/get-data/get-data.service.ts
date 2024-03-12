import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  menuOptionsUrl: string = "assets/data/menu-option.json";
  apiDatatUrl: string = "assets/data/api.json";
  designDatatUrl: string = "assets/data/design.json";
  programmingLogicDatatUrl: string = "assets/data/programming-logic.json";
  tutorialsDatatUrl: string = "assets/data/tutorials-and-guides.json";
  othersDatatUrl: string = "assets/data/others.json";

  constructor(private httpClient: HttpClient) {}

  getMenuOptions(): Observable<any>{
    return this.httpClient.get(this.menuOptionsUrl);
  }

  getApiData(): Observable<any>{
    return this.httpClient.get(this.apiDatatUrl);
  }

  getDesignData(): Observable<any>{
    return this.httpClient.get(this.designDatatUrl);
  }

  getProgrammingLogicData(): Observable<any>{
    return this.httpClient.get(this.programmingLogicDatatUrl);
  }

  getTutorialsData(): Observable<any>{
    return this.httpClient.get(this.tutorialsDatatUrl);
  }

  getOthersData(): Observable<any>{
    return this.httpClient.get(this.othersDatatUrl);
  }
}

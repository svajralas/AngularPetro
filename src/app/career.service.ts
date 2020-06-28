import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Career{
  constructor(
    public id:number,
    public role:string,
    public skills:string,
    public location:string,
    public jobDescription:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private httpClient:HttpClient) { }


  getCareer(){
  
  return this.httpClient.get<Career[]>('http://localhost:9090/petrolink/career');
}

public deleteCareer(career) {
  return this.httpClient.delete<Career>("http://localhost:9090/petrolink/career" + "/"+ career.id);
}

public createCareer(career) {
  return this.httpClient.post<Career>("http://localhost:9090/petrolink/career", career);
}

}


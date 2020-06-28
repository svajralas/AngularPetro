import { Component, OnInit } from '@angular/core';
import { CareerService, Career } from './../career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  careers:Career[];

  constructor(private careerService:CareerService) { }

  ngOnInit(): void {
    this.careerService.getCareer().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
{
    this.careers=response;
}

deleteCareer(career: Career): void {
  this.careerService.deleteCareer(career)
    .subscribe( data => {
      this.careers = this.careers.filter(u => u !== career);
    })
};

}

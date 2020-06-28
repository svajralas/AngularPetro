import { Component, OnInit } from '@angular/core';
import { CareerService, Career } from './../career.service';

@Component({
  selector: 'app-add-career',
  templateUrl: './add-career.component.html',
  styleUrls: ['./add-career.component.css']
})
export class AddCareerComponent implements OnInit {

  career: Career = new Career(0,"","","","");

  constructor(private careerService: CareerService) { }

  ngOnInit(): void {
  }

  createCareer(): void {
    this.careerService.createCareer(this.career)
        .subscribe( data => {
          alert("Career created successfully.");
        });

  };

}

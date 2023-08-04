import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staff: any;

  constructor(private service: StaffService) {}

  ngOnInit() {
    this.service
      .getStaff()

      .subscribe((response) => {
        this.staff = response;
      });
  }
}

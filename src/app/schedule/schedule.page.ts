import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
eventSource;
viewTitle;
isToday: boolean;
onViewTitleChanged = (title: string) => {
       this.viewTitle = title;
   };

calendar = {
mode: 'month',
currentDate: new Date()

};

abc() {
           this.calendar.mode='month';
       };
	   abc1() {
           this.calendar.mode='day';
       };
onTimeSelected(ev) {
           this.calendar.mode='week';
       };
  constructor() {



	  }

  ngOnInit() {
  }

}

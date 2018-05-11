import { JOBS } from './jobs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  jobIndex: number;
  job: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('RESUME ON IT');
    this.route.params.forEach( (element) => {
      console.log('CURRENT ELEMENT IN OBSERVABLE', element);
      this.jobIndex = element.id;
      this.job = JOBS.find( (job) => {
        // tslint:disable-next-line:radix
        return job.id === parseInt(element.id);
      });
      console.log('THE JOB INDEX', typeof this.jobIndex);
      console.log('THE ACTUAL JOB', this.job);
    });
  }

}

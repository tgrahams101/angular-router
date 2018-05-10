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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.params);
  }

}
